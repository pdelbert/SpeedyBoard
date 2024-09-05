import mockSongs from "../mock/songsMock";
import { Songs, SongsRepository } from "../domain/songs";


const SongsRepositoryImpl = ():SongsRepository => ({
    
    getTotalStreamedSongs:():Songs[] => {
        return mockSongs;
    },

    getMostStremedArtis:():Songs[] => {
        return mockSongs;
    },

    getMostStreamedSong:():Songs[] => {
        return mockSongs;    
    },

    getRecentStreams:():Songs[] => {
        return mockSongs;
    }

});

export default SongsRepositoryImpl;
