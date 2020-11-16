# Gimme-the-song
 Gimme-the-song is a simple lib that recognize a music from a audio file. Its a Javascript implementation of [AcoustId Chromaprint](https://acoustid.org/chromaprint) and their [service](https://acoustid.org/server). As it depends on a C library, Gimme-the-song needs to run on server side.
 
## Installing
```bash
npm install gimme-the-song
```
## Getting started
The "gimme" method receive an audio file, generates an audio fingerprint and search on [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_Database) database using [AcoustId Service](https://acoustid.org/server).

````javascript
const {gimme, setGimmeKey} = require('gimme-the-song')
const path = require('path')

// Remember to set a valid client key. Otherwise gimme will return null.
// If you don't have a client key, access https://acoustid.org/new-application to register your application and get a client key.
setGimmeKey('YOUR API KEY')

// get the full path to the file
const  file_path  = path.join(__dirname, './sample.mp3')
  
// call 'gimme' method, receive the results and console it
gimme(file_path, {}, (results) => {
	console.log(results)
})
````

## Get audio fingerprint
If you just want to get the audio fingerprint, use the method "fpcalc". Similar to "gimme", it receives an audio file and generates an audio fingerprint. There is no need to set a cliente key if you are using just this method.
````javascript
const {fpcalc} = require('gimme-the-song')

// get the full path to the file
const  file_path  = path.join(__dirname, './sample.mp3')

// call the method 'fpcalc', receive the results and console it
fpcalc(file_path, (results) => {
	console.log(results.fingerprint, results.duration)
})
````