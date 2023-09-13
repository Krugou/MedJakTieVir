# Define the FFmpeg commands as strings
$videoCommand = 'ffmpeg -i abc.mkv ' +
    '-c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 ' +
    '-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm ' +
    '-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm ' +
    '-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm ' +
    '-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm ' +
    '-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm '

$audioCommand = 'ffmpeg -i abc.mkv ' +
    '-vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm '

$manifestCommand = 'ffmpeg -f webm_dash_manifest -i video_160x90_250k.webm_manifest.mpd ' +
    '-f webm_dash_manifest -i video_320x180_500k.webm_manifest.mpd ' +
    '-f webm_dash_manifest -i video_640x360_750k.webm_manifest.mpd ' +
    '-f webm_dash_manifest -i video_640x360_1000k.webm_manifest.mpd ' +
    '-f webm_dash_manifest -i video_1280x720_1500k.webm_manifest.mpd ' +
    '-f webm_dash_manifest -i my_audio.webm_manifest.mpd ' +
    '-c copy -map 0 -map 1 -map 2 -map 3 -map 4 -map 5 ' +
    '-f webm_dash_manifest -adaptation_sets "id=0,streams=0,1,2,3,4 id=1,streams=5" ' +
    'output.mpd'

# Execute the FFmpeg commands
Invoke-Expression $videoCommand
Invoke-Expression $audioCommand
Invoke-Expression $manifestCommand