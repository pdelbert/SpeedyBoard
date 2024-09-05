import { DatasetElementType } from "@mui/x-charts/internals";
import { DATE_TIME_FORMAT, LIMIT_STREMS_DAYS, MONTHS_MMM_FORMAT } from "../constants";
import { IUserRepositoryImpl } from "../domain/users";
import UserRepositoryImpl from "../infrastructure/userRepositoryImpl";
import { currentDate, daysBetween, getLastMonths, isSameMonth } from "../utils/date";

const usersUseCase = ():IUserRepositoryImpl => ({
    
    getRegisteredUsers:():number => {
        const  { getRegisteredUsers } = UserRepositoryImpl();
        const usersMock = getRegisteredUsers();
        return usersMock.filter((item, _) => item.registered === true).length;
    },

    getActiveUsers:():number => {
        const  { getActiveUsers } = UserRepositoryImpl();
        const usersMock = getActiveUsers();

        return usersMock.filter((item, _) =>  
            daysBetween(item.last_connection, currentDate(DATE_TIME_FORMAT)) < LIMIT_STREMS_DAYS).length;

    },

    getUserGrowth:():DatasetElementType<string | number | Date | null | undefined>[] => {
        const  { getUserGrowth } = UserRepositoryImpl();
        const usersMock = getUserGrowth();

        let totalUsersCount = 0;
        let activeUsersCount = 0;

        const lastMonths = getLastMonths(12, MONTHS_MMM_FORMAT);
        const lastMonthsFormatted = getLastMonths(12, DATE_TIME_FORMAT);
        

        const data: DatasetElementType<string | number | Date | null | undefined>[] = lastMonths.map((month, index) => {
            totalUsersCount += usersMock.filter((elem, _ )=>  isSameMonth(elem.created_at, lastMonthsFormatted[index])).length
            activeUsersCount += usersMock.filter((elem, _ )=>  isSameMonth(elem.last_connection, lastMonthsFormatted[index])).length
             
            return {
                total_users: totalUsersCount,
                active_users: activeUsersCount, 
                month: month
            }
        });

        return data;
    }

})

export default usersUseCase;
