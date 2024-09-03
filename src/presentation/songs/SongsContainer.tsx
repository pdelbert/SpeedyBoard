import songsUseCase from '../../useCase/songsUseCase'
import { BarChartProps } from '../../domain/songs';

export const getTotalStreams = (): number => {
    const { getTotalStreamedSongs } = songsUseCase();
    return getTotalStreamedSongs();
}

export const getMostStreamedSong = (): BarChartProps => {
    const { getMostStreamedSong } = songsUseCase();
    return getMostStreamedSong();
}

