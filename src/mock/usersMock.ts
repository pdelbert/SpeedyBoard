import { Users } from "../domain/users";

const usersMock:Users[] = [
    {
        id:1,
        registered: true,
        name:"Robert Baratheon",
        email:"robert@baratheon.com",
        last_connection: "2023-09-03",
        created_at: "2023-09-03"
    },
    {
        id:2,
        registered: true,
        name:"Tyrion Lannister",
        email:"tyrion@lannister.com",
        last_connection: "2024-08-03",
        created_at: "2023-08-03"
    },
    {
        id:3,
        registered: true,
        name:"Samwell Tarly",
        email:"samwell@tarly.com",
        last_connection: "2024-08-04",
        created_at: "2023-09-03"
    },
    {
        id:4,
        registered: true,
        name:"Sansa Stark",
        email:"sansa@stark.com",
        last_connection: "2024-08-05",
        created_at: "2023-09-23"
    },
    {
        id:5,
        registered: true,
        name:"Arya Stark",
        email:"arya@stark.com",
        last_connection: "2024-08-06",
        created_at: "2023-10-03"
    },
    {
        id:6,
        registered: false,
        name:"Joffrey Baratheon",
        email:"joffrey@baratheon.com",
        last_connection: "2024-08-07",
        created_at: "2023-11-03"
    },
    {
        id:7,
        registered: true,
        name:"Daenerys Targaryen",
        email:"daenerys@targaryen.com",
        last_connection: "2024-08-08",
        created_at: "2023-12-03"
    },
    {
        id:8,
        registered: false,
        name:"Jaime Lannister",
        email:"jaime@lannister.com",
        last_connection: "2024-08-10",
        created_at: "2023-12-23"
    },
    {
        id:9,
        registered: true,
        name:"Khal Drogo",
        email:"khal@drogo.com",
        last_connection: "2024-08-08",
        created_at: "2024-01-23"
    },
    {
        id:10,
        registered: true,
        name:"Eddard Stark",
        email:"eddard@stark.com",
        last_connection: "2024-08-15",
        created_at: "2024-02-23"
    },
    {
        id:11,
        registered: true,
        name:"Hodor",
        email:"hodor@hodor.com",
        last_connection: "2024-08-18",
        created_at: "2024-03-23"
    },
    {
        id:12,
        registered: false,
        name:"Cersei Lannister",
        email:"cersei@lannister.com",
        last_connection: "2024-08-21",
        created_at: "2024-04-23"
    },
    {
        id:13,
        registered: false,
        name:"Varys",
        email:"varys@varys.com",
        last_connection: "2024-08-25",
        created_at: "2024-04-23"
    }
]

export default usersMock;
