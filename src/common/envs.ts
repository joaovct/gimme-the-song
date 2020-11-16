import { SetGimmeKey } from "./types"

export let CLIENT_KEY = ''
export const COMMAND_FPCALC = 'gimme-the-song-fpcalc' 

/**
 * Set a client key to use the method 'gimme'. If you don't have it, access https://acoustid.org/new-application to register your application and get a client key.
 * @param string - Client Key
*/
export const setGimmeKey: SetGimmeKey = (clientKey) => {
    CLIENT_KEY = clientKey
}