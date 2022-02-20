export const counting = ()=>{
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
   var countDown = new Date(2022, 5, 2).getTime(),  
    now = new Date().getTime(),
        distance = countDown - now - 30;
    var obj = {
            days : Math.floor(distance / (day)),
            hours : Math.floor((distance % (day)) / (hour)),
    }
    return obj;
}
