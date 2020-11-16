const {gimme, setGimmeKey, fpcalc} = require('../dist/index') // 'gimme-the-song' for your project
const path = require('path')

// Remember to set a valid client key. Otherwise gimme will return null. 
// If you don't have a client key, access https://acoustid.org/new-application to register your application and get a client key.
setGimmeKey('YOUR API KEY')

// get the full path to the file
const file_path = path.join(__dirname, './sample.mp3')

// call 'gimme' method, receive the results and console it
gimme(file_path, {}, (results) => {
    console.log(results)
})

fpcalc()