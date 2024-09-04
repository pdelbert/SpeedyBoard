import { BILLIONS, MILLIONS, NO_VIEW, THOUSANDS } from "../constants";

export const kFormatter = (num:number) => {
    
    if (num >= BILLIONS) {
        return (num / BILLIONS).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= MILLIONS) {
        return (num / MILLIONS).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= THOUSANDS) {
        return (num / THOUSANDS).toFixed(1).replace(/\.0$/, '') + 'K';
     }

     return NO_VIEW;
}