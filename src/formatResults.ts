import {FormatResults, Results, Track} from './common/types'

interface TrackCounter extends Track{
    counter: 1
}

interface TrackCounterOptional extends Track{
    counter?: number
}

const formatResults: FormatResults = (results) => {
    if(results === null)
        return results
    
    let [track, ...trackVariants] = removeCounter(orderIds(filterIds(results, [])))
    
    return {track, trackVariants}
}

const filterIds = (results: Results, ids: Array<TrackCounter>): Array<TrackCounter> => {
    if(results === null) 
        return ids
    
    results.forEach((item) => {
        if(item.recordings)
            item.recordings.forEach((record) => {
                const index = ids.findIndex( ({id: elementId}) => elementId === record.id )
                if(index > -1)
                    return ids[index].counter += 1
                ids.push({...record, counter: 1})
            })
    })
    return ids
}

const orderIds = (ids: Array<TrackCounter>): Array<TrackCounter> => ids.sort(({counter: counterA}, {counter: counterB}) => {
    return counterA > counterB ? -1 : counterA < counterB ? 1 : 0 
})

const removeCounter = (ids: Array<TrackCounterOptional>): Array<Track> => ids.map(id => {
    delete id.counter
    return id
})

export default formatResults