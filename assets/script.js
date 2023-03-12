let timeDisplayEl = $('#time-display');

setInterval(displayTime, 1000);
function displayTime() {
    let rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);

  
  }

  