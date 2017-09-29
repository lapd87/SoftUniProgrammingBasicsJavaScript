//function dateAfter1000Days([arg1]) {
//    let inputDate = arg1;

//    let parts = inputDate.split('-');

//    let startDate = new Date(parts[2], parts[1] - 1, parts[0]); //months [0-11] - 1 = [1-12]

//    let addDays = 999;

//    let newDate = new Date(startDate.getTime() + 86400000 * addDays); // 24* 60 * 60 *1000 msec/day

//    let dd = ("0" + (newDate.getDate())).slice(-2);//leading zero+day+cutting last 2 digits
//    let mm = ("0" + (newDate.getMonth() + 1)).slice(-2); //leading zero + months [0-11] - 1 = [1-12]+cutting last 2 digits
//    let yyyy = newDate.getFullYear();

//    console.log(`${dd}-${mm}-${yyyy}`);
//}


dateAfter1000Days(["25-02-1995"]);

function dateAfter1000Days([arg1]) {
    let inputDate = arg1;

    let parts = inputDate.split('-');

    let dd = Number(parts[0]);
    let mm = Number(parts[1]);
    let yyyy = Number(parts[2]);

    let newDate = new Date(yyyy, mm - 1, dd + 999); //months [0-11] - 1 = [1-12]

    dd = ("0" + newDate.getDate()).slice(-2);
    mm = ("0" + (newDate.getMonth() + 1)).slice(-2);  //leading zero + months [0-11] - 1 = [1-12]+cutting last 2 digits
    yyyy = newDate.getFullYear();

    console.log(`${dd}-${mm}-${yyyy}`);
}
