const bcrypt  = require('bcrypt')

class StreamController {
    static async createStream(stream){
        const {name, keys} = stream;

        const key = genStreamKey(name);


    }

    static async getStream(id){

    }

    static async startStream(id){

    }


    static async getStreams(offset, limit){
        if (!(offset && limit)){
            return __dirname;
        }
        return []
    }
  
}


async function genStreamKey(data){
    const key = await bcrypt.hash(data)
    return key;
}

module.exports = {
    StreamController
}