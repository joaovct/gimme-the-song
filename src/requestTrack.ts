import api from "./common/api"
import { CLIENT_KEY } from "./common/envs"
import { RequestTrack } from "./common/types"
import {Results} from './common/types'

const requestTrack: RequestTrack = async (duration, fingerprint, configs = {}) => {
    if(!CLIENT_KEY){
        throw "The method 'gimme' requires a client key. Use the method 'setClientKey' to set yours. Access https://acoustid.org/new-application to register your application and get a client key."
    }

    let data = null
    let meta: Array<string> = ["recordings"]

    if( Object.keys(configs.meta || {}).length ){
        for(let key in configs.meta){
            if(configs.meta[key] === true){
                meta.push(key.toLowerCase())
            }
        }
    }

    try{
        const res = await api.get<{results: Results}>(`/lookup?client=${CLIENT_KEY}&fingerprint=${fingerprint}&duration=${duration}${meta.length ? `&meta=${meta.join('+')}` : ''}`)
        data = res.data
    }catch(err){
        throw err
    }finally{
        return data?.results || null
    }
}

export default requestTrack