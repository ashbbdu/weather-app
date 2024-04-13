

export const convertDate = (date : number) => {
    const unixTimestamp = date; 
    const newDate = new Date(unixTimestamp * 1000);
    const finalDate = newDate.toUTCString();
    return finalDate
}