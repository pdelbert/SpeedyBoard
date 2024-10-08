import { DatasetElementType } from "@mui/x-charts/internals"

export interface Users {
    id: number
    name: string
    email: string
    registered: boolean
    last_connection: string
    created_at: string
}

export interface UserRepository {
    getRegisteredUsers():Users[]
    getActiveUsers():Users[]
    getUserGrowth():Users[]
}

export interface IUserRepositoryImpl {
    getRegisteredUsers():number
    getActiveUsers():number
    getUserGrowth():DatasetElementType<string | number | Date | null | undefined>[]
}
