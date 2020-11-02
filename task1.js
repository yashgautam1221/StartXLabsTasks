function secondsToDMS() {
    let seconds = document.getElementById("seconds").value;
    // let days = seconds/(24*3600);
    // seconds = seconds%(24*3600);
    let hours = seconds/3600;
    seconds = seconds%3600;
    let min = seconds/60;
    seconds = seconds%60;

    // document.getElementById("days").innerHTML = "Number of Days = " + Math.floor(days);
    document.getElementById("hours").innerHTML = "Number of hours = " + Math.floor(hours);
    document.getElementById("min").innerHTML = "Number of minutes = " + Math.floor(min);
    document.getElementById("second").innerHTML = "Number of seconds = " + Math.floor(seconds);

  }