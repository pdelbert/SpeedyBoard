import mockSongs from "../mock/songsMock";
import { currentDate, daysBetween } from "../utils/date";

import { DATE_TIME_FORMAT, LIMIT_STREMS_DAYS } from "../constants";
import { BarChartProps, Songs, SongsRepository } from "../domain/songs";


const SongsRepositoryImpl = ():SongsRepository => ({
    
    getTotalStreamedSongs:():number => {
        return mockSongs.filter((item, _) => item.stream_count > 0).length;
    },

    getMostStremedArtis:():number => {
        const topArtist = mockSongs.filter((item, _) =>  
            daysBetween(item.last_stream, currentDate(DATE_TIME_FORMAT)) > LIMIT_STREMS_DAYS);
        return Math.max(...topArtist.map((item, _) => item.stream_count));
    },

    getMostStreamedSong:(): BarChartProps => {
        const topArtist = mockSongs
            .filter((item, _) => daysBetween(item.last_stream, currentDate(DATE_TIME_FORMAT)) <= LIMIT_STREMS_DAYS)
            .map((item, _) => item.title);

        const dataSet = Array.from(new Set(topArtist));
        const result = topArtist.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
        const series = Array.from(result.values())
        
        return { dataSet: dataSet, series: series};           
    },
    getRecentStreams:():Songs[] => {
        return mockSongs;
    }

});

export default SongsRepositoryImpl;
