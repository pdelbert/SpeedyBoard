import { UserRepository } from "../domain/users";
import UserRepositoryImpl from "../infrastructure/userRepositoryImpl";

const usersUseCase = ():UserRepository => ({
    
    getRegisteredUsers: () => {
        const  { getRegisteredUsers } = UserRepositoryImpl();
        return getRegisteredUsers()
    },

    getActiveUsers: () => {
        const  { getActiveUsers } = UserRepositoryImpl();
        return getActiveUsers();
    },

    getUserGrowth: () => {
        const  { getUserGrowth } = UserRepositoryImpl();
        return getUserGrowth();
    }

})

export default usersUseCase;
