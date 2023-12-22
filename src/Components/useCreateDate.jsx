const useCreateDate =()=>{
    const dateObj = new Date();
    const month =dateObj.getMonth();
    let monthName;
    switch(month){
        case 0: monthName ="jan";
        break;
        case 1: monthName ="feb";
        break;
        case 2: monthName ="mar";
        break;
        case 3: monthName ="apr";
        break;
        case 4: monthName ="may";
        break;
        case 5: monthName ="jun";
        break;
        case 6: monthName ="jul";
        break;
        case 7: monthName ="aug";
        break;
        case 8: monthName ="sep";
        break;
        case 9: monthName ="oct";
        break;
        case 10: monthName ="nov";
        break;  
        case 11: monthName ="dec";
        break;

    }

    const date = `${monthName} ${dateObj.getDate()} ${dateObj.getFullYear()}`
    return date
}
export default useCreateDate;