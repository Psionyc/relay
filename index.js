const NodeMediaServer = require('node-media-server');
const express = require('express');
const {StreamRouter} = require("./routes")
const {spawn}= require('child_process')

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*',
        mediaroot: './media',
    },
    trans: {
        ffmpeg: "C:/Users/Ione/ffmpeg/bin/ffmpeg.exe",
        tasks: [{
            app: 'live',
            mp4: true,
            mp4Flags: '[movflags=frag_keyframe+empty_moov]',
        }
        ]
    },
    relay: {
        ffmpeg: "C:/Users/Ione/ffmpeg/bin/ffmpeg.exe",
        tasks: [
            {
                app: 'rtmp',
                mode: 'push',
                edge: 'rtmps://live-api-s.facebook.com',
            },
        ]
    }
};

var nms = new NodeMediaServer(config)

nms.run();

// const app = express()
// app.use("/streams", StreamRouter)
// app.listen(3001, ()=>{  
// })

nms.on('postPublish', ()=>{
    console.log("Publishing")
    // const ffmpeg_publish = spawn("./ffmpeg.sh")

    // ffmpeg_publish.on('message', (d)=> {
    //     console.table(d)
    // })
})


