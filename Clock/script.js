window.addEventListener('load', function() {  
    setInterval(time, 1000); 
});  

function time() {  
    var date = new Date();  
    var daynum = date.getDay();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var ampm = hour >= 12 ? 'PM' : 'AM';  
    var daynames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];  
    hour = hour % 12;  
    hour = hour ? hour : 12; // Adjust for 0 hour  
    hour = hour < 10 ? '0' + hour : hour;  
    minute = minute < 10 ? '0' + minute : minute;  

    document.getElementById('day').innerHTML = daynames[daynum];  
    document.getElementById('hour').innerHTML = hour;  
    document.getElementById('minute').innerHTML = minute;  
    document.getElementById('ampm').innerHTML = ampm;  
}