import {exec} from 'child_process'

const command = process.platform === 'win32' ? 'gimme-the-song-fpcalc' : 'gimme-the-song-fpcalc-linux'

export interface Callback{
    (result: {duration: string, fingerprint: string}): void
}

const execFPcalc = (file: string, callback: Callback) => {
    exec(`${command} ${file} -json`, (err, stdout) => {
        if(err){
            throw err
        }

        const {duration, fingerprint} = JSON.parse(stdout)

        callback({duration, fingerprint})
    })
}

export default execFPcalc