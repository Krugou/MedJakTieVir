//Room.js updated code according to react router v6
import React, {useRef, useEffect} from 'react';
import io from 'socket.io-client';
import {useParams} from 'react-router-dom';

const Room = () => {
    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();

    const {roomID} = useParams();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({audio: false, video: true}).then((stream) => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;

            socketRef.current = io.connect('/');
            socketRef.current.emit('join room', roomID);

            socketRef.current.on('other user', (userID) => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on('user joined', (userID) => {
                otherUser.current = userID;
            });

            socketRef.current.on('offer', handleReceiveCall);

            socketRef.current.on('answer', handleAnswer);

            socketRef.current.on('ice-candidate', handleNewICECandidateMsg);
        });
    }, []);

    function callUser(userID) {
        peerRef.current = createPeer(userID);
        userStream.current.getTracks().forEach((track) => peerRef.current.addTrack(track, userStream.current));
    }

    function createPeer(userID) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.stunprotocol.org',
                },
                {
                    urls: 'turn:numb.viagenie.ca:3478',
                    credential: 'muazkh',
                    username: 'webrtc@live.com',
                },
            ],
        });

        peer.onicecandidate = handleNewICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID) {
        peerRef.current
            .createOffer()
            .then((offer) => {
                return peerRef.current.setLocalDescription(offer);
            })
            .then(() => {
                const payload = {
                    target: userID,
                    caller: socketRef.current.id,
                    sdp: peerRef.current.localDescription,
                };
                socketRef.current.emit('offer', payload);
            })
            .catch((e) => console.log(e));
    }

    function handleReceiveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current
            .setRemoteDescription(desc)
            .then(() => {
                userStream.current.getTracks().forEach((track) => peerRef.current.addTrack(track, userStream.current));
            })
            .then(() => {
                return peerRef.current.createAnswer();
            })
            .then((answer) => {
                return peerRef.current.setLocalDescription(answer);
            })
            .then(() => {
                const payload = {
                    target: incoming.caller,
                    caller: socketRef.current.id,
                    sdp: peerRef.current.localDescription,
                };
                socketRef.current.emit('answer', payload);
            })
            .catch((e) => console.log(e));
    }

    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch((e) => console.log(e));
    }

    function handleNewICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            };
            socketRef.current.emit('ice-candidate', payload);
        }
    }

    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate).catch((e) => console.log(e));
    }

    function handleTrackEvent(e) {
        const stream = e.streams[0];
        if (partnerVideo.current.srcObject !== stream) {
            partnerVideo.current.srcObject = stream;
        }
    }

    return (
        <div>
            <video autoPlay ref={userVideo} />
            <video autoPlay ref={partnerVideo} />
        </div>
    );
};

export default Room;