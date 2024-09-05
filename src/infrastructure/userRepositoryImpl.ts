import usersMock from "../mock/usersMock"
import { UserRepository, Users } from "../domain/users"


const UserRepositoryImpl = ():UserRepository => ({
    
    getRegisteredUsers:():Users[] => {
        return usersMock;
    },
    
    getActiveUsers:():Users[] => {
        return usersMock;
    },

    getUserGrowth:():Users[] => {
        return usersMock;
    }
});

export default UserRepositoryImpl;
