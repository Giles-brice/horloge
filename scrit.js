let is24HourFormat = false


function update() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

   if (!is24HourFormat){
    ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12 ;
       }

       if (minutes < 10) {
        minutes = '0' + minutes;
        if (seconde < 10){
            seconds = '0' + seconds;
        }
        
         const timeString = `${hours}:${minutes}:${secondes}${ampm}`;
         document.getElementById('clock').innerText = timeString;

         setTimeout(updateClock,1000);
        }

    function toggleFormat() {
        is24HourFormat =!is24HourFormat;
        updateClock();
        
    }
}