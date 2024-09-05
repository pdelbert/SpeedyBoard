export interface Songs {
    id: number
    artist: string
    title: string
    album: string
    year: string
    stream_count: number
    last_stream: string
    avatar: string
}
export interface BarChartProps {
    dataSet: string[]
    series: (number | null)[]
}

export interface TableProps {
    dataset: Songs[]
}

export interface SongsRepository {
    getTotalStreamedSongs():Songs[]
    getMostStremedArtis():Songs[]
    getMostStreamedSong():Songs[]
    getRecentStreams():Songs[]
}

export interface ISongsRepositoryImpl {
    getTotalStreamedSongs():number
    getMostStremedArtis():number
    getMostStreamedSong():BarChartProps
    getRecentStreams():Songs[]
}
