export interface Songs {
    id: number
    artist: string
    title: string
    album: string
    year: string
    stream_count: number
    last_stream: string
}
export interface BarChartProps {
    dataSet: string[]
    series: (number | null)[]
}

export interface SongsRepository {
    getTotalStreamedSongs(): number
    getMostStremedArtis(): number
    getMostStreamedSong(): BarChartProps
}
