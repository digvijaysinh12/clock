setInterval(()=>{
    d = new Date();
    Htime = d.getHours();
    Mtime = d.getMinutes();
    Stime = d.getSeconds();
    Hrotation = 30*Htime + (Mtime/2);
    Mrotation = 6*Mtime + (Stime/12);
    Srotation = 6*Stime;

    document.getElementById('hour').style.transform = `rotate(${Hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${Mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${Srotation}deg)`;
},1000)