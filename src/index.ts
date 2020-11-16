import execFPcalc from './execFPcalc'
import {Gimme} from './common/types'
import {setGimmeKey} from './common/envs'
import requestTrack from './requestTrack'
import formatResults from './formatResults'
import Bottleneck from 'bottleneck'

// 3 requests per second
const limiter = new Bottleneck({minTime: 1000 / 3})

/**
 * Recognize a music from a audio file and return through a callback function
 * @param string - Path for the audio file
 * @param object - Configs for the return
 * @param function - Callback function that receives the results
*/
const gimme: Gimme = (file_path, configs = {}, callback) => 
    execFPcalc(file_path, async (result) => {
        let formatedResults = null
        try{
            formatedResults = formatResults(await limiter.schedule(async () => await requestTrack(result.duration, result.fingerprint, configs)))
        }catch(err){
            console.error(err)
            formatedResults = null
        }finally{
            callback(formatedResults)
        }
    })

export {gimme, setGimmeKey, execFPcalc as fpcalc}