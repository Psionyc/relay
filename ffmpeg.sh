$STREAM_1 = "rtmps://live-api-s.facebook.com:443/rtmp/FB-425872989004544-0-Abw4y18oVOGYU9CA"
$STREAM_2 = "rtmp://127.0.0.1:1936/rtmp/live"

C:/Users/Ione/ffmpeg/bin/ffmpeg.exe -i rtmp://127.0.0.1:1935/rtmp/test -vcodec libx264 -vb 400k -acodec aac -ab 100k -ar 48000 -ac 2 -f flv -muxdelay 0.1 $1 & C:/Users/Ione/ffmpeg/bin/ffmpeg.exe -i rtmp://127.0.0.1:1935/rtmp/test -vcodec libx264 -vb 400k -acodec aac -ab 100k -ar 48000 -ac 2 -f flv -muxdelay 0.1 $2