export interface SetGimmeKey{
    (client_key: string): void
}

export interface Gimme{
    (file_path: string, configs: Configs, cb: (results: FormattedResults) => void): void
}

interface Configs{
    meta?: {
        [key: string]: any
        recordingsIds?: boolean
        releases?: boolean
        releaseIds?: boolean
        releaseGroups?: boolean
        releaseGroupIds?: boolean
        compress?: boolean
        usermeta?: boolean
        sources?: boolean
        tracks?: boolean
    }
}

export type Results = Array<{
    id: string
    score: number
    recordings?: Array<{
        artists: Array<TrackArtist>
        duration: number
        id: string
        title: string
    }>
}> | null

export interface FPcalcResult{
    fingerprint: string
    duration: string
}

export interface RequestTrack{
    (fingerprint: string, duration: string, configs: Configs): Promise<Results>
}

export interface FormatResults{
    (results: Results): FormattedResults
}

export type FormattedResults = {
    track: Track
    trackVariants: Array<Track>
} | null

export interface Track{
    id: string
    title: string
    artists: Array<TrackArtist> 
    duration: number
}

export interface TrackArtist{
    id: string
    name: string
    joinphrase?: string
}