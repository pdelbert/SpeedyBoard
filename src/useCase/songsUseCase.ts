import { SongsRepository } from "../domain/songs";
import SongsRepositoryImpl from "../infrastructure/songsRepositoryImpl";


const songsUseCase =():SongsRepository => ({

    getTotalStreamedSongs :() => {
        const { getTotalStreamedSongs } = SongsRepositoryImpl();
        return getTotalStreamedSongs();
    },

    getMostStremedArtis :() => {
        const { getMostStremedArtis } = SongsRepositoryImpl();
        return getMostStremedArtis();
    },

    getMostStreamedSong :() => {
        const { getMostStreamedSong } = SongsRepositoryImpl();
        return getMostStreamedSong();
    }
});

export default songsUseCase;
