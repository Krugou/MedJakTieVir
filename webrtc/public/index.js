document.addEventListener('DOMContentLoaded', () => {

    // Connect to the signaling server
    const socket = io();


    // Handle incoming signaling messages
    socket.on('signal', (message) => {
        console.log('received signal:', message);

        // Handle the signaling message based on its type
        switch (message.type) {
            case 'offer':
                // Set the remote peer ID
                remotePeerId = message.from;

                // Handle the offer
                handleOffer(message);
                break;
            case 'answer':
                // Set the remote peer ID
                remotePeerId = message.from;

                // Handle the answer
                handleAnswer(message);
                break;
            case 'ice-candidate':
                // Set the remote peer ID
                remotePeerId = message.from;

                // Handle the ICE candidate
                handleIceCandidate(message);
                break;
        }
    });

    // Send a signaling message to the server
    function sendSignal(message) {
        console.log('sending signal:', message);
        socket.emit('signal', message);
    }

    // Handle the offer message
    function handleOffer(message) {
        console.log('received offer:', message);

        // Create a new RTCPeerConnection
        const pc = new RTCPeerConnection();

        // Set up the local media stream
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((stream) => {
                console.log('got local media stream:', stream);

                // Add the local media stream to the RTCPeerConnection
                stream.getTracks().forEach((track) => {
                    pc.addTrack(track, stream);
                });

                // Set the remote description
                pc.setRemoteDescription(new RTCSessionDescription(message));

                // Create an answer
                pc.createAnswer()
                    .then((answer) => {
                        console.log('created answer:', answer);

                        // Set the local description
                        pc.setLocalDescription(answer);

                        // Send the answer to the server
                        sendSignal({
                            type: 'answer',
                            sdp: answer.sdp,
                            from: socket.id,
                            to: message.from
                        });
                    })
                    .catch((error) => {
                        console.error('failed to create answer:', error);
                    });
            })
            .catch((error) => {
                console.error('failed to get local media stream:', error);
            });
    }

    // Handle the answer message
    function handleAnswer(message) {
        console.log('received answer:', message);

        // Get the RTCPeerConnection associated with the remote peer
        const pc = peerConnections[message.from];

        // Set the remote description
        pc.setRemoteDescription(new RTCSessionDescription(message));
    }

    // Handle the ICE candidate message
    function handleIceCandidate(message) {
        console.log('received ICE candidate:', message);

        // Get the RTCPeerConnection associated with the remote peer
        const pc = peerConnections[message.from];

        // Add the ICE candidate to the RTCPeerConnection
        pc.addIceCandidate(new RTCIceCandidate(message.candidate))
            .then(() => {
                console.log('added ICE candidate successfully');
            })
            .catch((error) => {
                console.error('failed to add ICE candidate:', error);
            });
    }

    // Handle the "Call" button click event
    document.getElementById('callButton').addEventListener('click', () => {
        console.log('call button clicked');

        // Create a new RTCPeerConnection
        const pc = new RTCPeerConnection();

        // Set up the local media stream
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((stream) => {
                console.log('got local media stream:', stream);

                // Add the local media stream to the RTCPeerConnection
                stream.getTracks().forEach((track) => {
                    pc.addTrack(track, stream);
                });

                // Create an offer
                pc.createOffer()
                    .then((offer) => {
                        console.log('created offer:', offer);

                        // Set the local description
                        pc.setLocalDescription(offer);

                        // Send the offer to the remote peer
                        sendSignal({
                            type: 'offer',
                            sdp: offer.sdp,
                            from: socket.id,
                            to: remotePeerId
                        });
                    })
                    .catch((error) => {
                        console.error('failed to create offer:', error);
                    });
            })
            .catch((error) => {
                console.error('failed to get local media stream:', error);
            });
    });

    // Handle the "Hang Up" button click event
    document.getElementById('hangupButton').addEventListener('click', () => {
        console.log('hang up button clicked');

        // Stop the local media stream
        localStream.getTracks().forEach((track) => {
            track.stop();
        });

        // Close the RTCPeerConnection
        Object.values(peerConnections).forEach((pc) => {
            pc.close();
        });
        peerConnections = {};

        // Remove the remote video element
        const remoteVideo = document.getElementById('remoteVideo');
        remoteVideo.srcObject = null;
        remoteVideo.style.display = 'none';
    });
});