import moment from "moment";

export const daysBetween  = (startingDate:string, endDate: string) => {
    const endMoment = moment(endDate);   
    const startMoment = moment(startingDate); 
    const daysDifference = endMoment.diff(startMoment, 'days');
    return daysDifference;
}

export const currentDate = (format: string) => {
    return moment().format(format);
}

export const getLastMonths = (monthsRequired: number, format:string) => {
    let months = [];
    
    for (let i = monthsRequired; i >= 1; i--) {
        months.push(moment().subtract(i, 'months').format(format) )
    }

    return months;
}

export const isSameMonth = (firstData: string, secondData:string): boolean => {
    const first = moment(firstData).format('YYYY-MM');
    const second = moment(secondData).format('YYYY-MM');
    return moment(first).isSame(moment(second));
}
