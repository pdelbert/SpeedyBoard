import { DATE_TIME_FORMAT, LIMIT_STREMS_DAYS } from "../constants";
import { ISongsRepositoryImpl, BarChartProps } from "../domain/songs";
import SongsRepositoryImpl from "../infrastructure/songsRepositoryImpl";
import { currentDate, daysBetween } from "../utils/date";


const songsUseCase =():ISongsRepositoryImpl => ({

    getTotalStreamedSongs :():number => {
        const { getTotalStreamedSongs } = SongsRepositoryImpl();
        const mockSongs = getTotalStreamedSongs();
        
        return mockSongs.filter((item, _) => item.stream_count > 0).length;
    },

    getMostStremedArtis :():number => {
        const { getMostStremedArtis } = SongsRepositoryImpl();
        const mockSongs = getMostStremedArtis();
        const topArtist = mockSongs.filter((item, _) =>  daysBetween(item.last_stream, currentDate(DATE_TIME_FORMAT)) > LIMIT_STREMS_DAYS);
        
        return Math.max(...topArtist.map((item, _) => item.stream_count));
    },

    getMostStreamedSong :(): BarChartProps => {
        const { getMostStreamedSong } = SongsRepositoryImpl();
        const mockSongs = getMostStreamedSong();

        const topArtist = mockSongs
            .filter((item, _) => 
                daysBetween(item.last_stream, currentDate(DATE_TIME_FORMAT)) <= LIMIT_STREMS_DAYS)
            .map((item, _) => item.title);

        const dataSet = Array.from(new Set(topArtist));
        const result = topArtist.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
        const series = Array.from(result.values())
        
        return { dataSet: dataSet, series: series};
    },

    getRecentStreams: () => {
        const { getRecentStreams } = SongsRepositoryImpl();
        return getRecentStreams();
    }
});

export default songsUseCase;
