import usersMock from "../mock/usersMock"
import { UserRepository } from "../domain/users"

import { currentDate, daysBetween , getLastMonths, isSameMonth } from "../utils/date";
import { DATE_TIME_FORMAT, LIMIT_STREMS_DAYS } from "../constants";
import { DatasetElementType } from "@mui/x-charts/internals";


const UserRepositoryImpl = ():UserRepository => ({
    
    getRegisteredUsers :():number => {
        return usersMock.filter((item, _) => item.registered === true).length;
    },
    
    getActiveUsers :():number => {
        return usersMock.filter((item, _) =>  
            daysBetween(item.last_connection, currentDate(DATE_TIME_FORMAT)) < LIMIT_STREMS_DAYS).length;
    },

    getUserGrowth :():DatasetElementType<string | number | Date | null | undefined>[] => {
        let totalUsersCount = 0;
        let activeUsersCount = 0;

        const lastMonths = getLastMonths(12, 'MMM');
        const lastMonthsFormatted = getLastMonths(12, 'YYYY-MM-DD');
        

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
});

export default UserRepositoryImpl;
