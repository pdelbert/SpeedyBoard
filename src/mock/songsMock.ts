import { Songs } from "../domain/songs";


const mockSongs:Songs[] =[
    {
        id: 1,
        title:"Main Title",
        artist:"Ramin Djawadi",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 0,
        last_stream: "2023-10-03"
    },
    {
        id: 2,
        title:"Dracarys",
        artist:"Targaryen",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 43535,
        last_stream: "2023-10-03"
    },
    {
        id: 3,
        title:"King of the North",
        artist:"The Starks",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 23457889,
        last_stream: "2023-10-03"
    },
    {
        id: 4,
        title:"Im Hers, She is mine",
        artist:"Ramin Djawadi",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 0,
        last_stream: "2023-10-03"
    },
    {
        id: 5,
        title:"A Lannister Always Pays His Debts",
        artist:"The Lannisters",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 9087976,
        last_stream: "2023-10-03"
    },
    {
        id: 6,
        title:"You Know Nothing",
        artist:"Ygritte",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 21315467,
        last_stream: "2023-10-03"
    },
    {
        id: 7,
        title:"Winter Has Come",
        artist:"The Starks",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 21345476,
        last_stream: "2023-10-03"
    },
    {
        id: 8,
        title:"Dragonstone",
        artist:"Targaryen",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 9878567,
        last_stream: "2023-10-03"
    },
    {
        id: 9,
        title:"Message for Cerci",
        artist:"The Lannisters",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 456456,
        last_stream: "2023-10-03"
    },
    {
        id: 10,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-03"
    },
    {
        id: 11,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-03"
    },
    {
        id: 12,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-03"
    },
    {
        id: 13,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-03"
    },
    {
        id: 14,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-03"
    },
    {
        id: 15,
        title:"Khaleesi",
        artist:"Drogo",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 668765897,
        last_stream: "2024-09-03"
    },
    {
        id: 16,
        title:"Main Title",
        artist:"Ramin Djawadi",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 0,
        last_stream: "2023-10-03"
    },
    {
        id: 17,
        title:"Dracarys",
        artist:"Targaryen",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 43535,
        last_stream: "2023-10-03"
    },
    {
        id: 18,
        title:"King of the North",
        artist:"The Starks",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 23457889,
        last_stream: "2023-10-03"
    },
    {
        id: 19,
        title:"Im Hers, She is mine",
        artist:"Ramin Djawadi",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 0,
        last_stream: "2023-10-03"
    },
    {
        id: 20,
        title:"A Lannister Always Pays His Debts",
        artist:"The Lannisters",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 9087976,
        last_stream: "2023-10-03"
    },
    {
        id: 21,
        title:"You Know Nothing",
        artist:"Ygritte",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 21315467,
        last_stream: "2023-10-03"
    },
    {
        id: 22,
        title:"Winter Has Come",
        artist:"The Starks",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 21345476,
        last_stream: "2023-10-03"
    },
    {
        id: 23,
        title:"Dragonstone",
        artist:"Targaryen",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 9878567,
        last_stream: "2023-10-03"
    },
    {
        id: 24,
        title:"Message for Cerci",
        artist:"The Lannisters",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 456456,
        last_stream: "2023-10-03"
    },
    {
        id: 25,
        title:"Hold the Door",
        artist:"Hodor",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 2342,
        last_stream: "2024-09-13"
    },
    {
        id: 26,
        title:"Khaleesi",
        artist:"Drogo",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 668765897,
        last_stream: "2024-09-03"
    },
    {
        id: 27,
        title:"Khaleesi",
        artist:"Drogo",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 668765897,
        last_stream: "2024-09-03"
    },
    {
        id: 28,
        title:"Khaleesi",
        artist:"Drogo",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 668765897,
        last_stream: "2024-09-03"
    },
    {
        id: 29,
        title:"Khaleesi",
        artist:"Drogo",
        album: "Game of Thrones - HBO",
        year: '2022',
        stream_count: 668765897,
        last_stream: "2024-09-03"
    },

]

export default mockSongs;
