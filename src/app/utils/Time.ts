export class TimeAgo{
     timeSince(timeStamp) {
        let now = new Date(),
          secondsPast = (now.getTime() - timeStamp) / 1000;
        if(secondsPast < 60){
          return Number(secondsPast) + 's';
        }
        if(secondsPast < 3600){
          return Number(secondsPast/60) + 'm';
        }
        if(secondsPast <= 86400){
          return Number(secondsPast/3600) + 'h';
        }
        if(secondsPast > 86400){
           let day = timeStamp.getDate();
          let  month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
         let   year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
            return day + " " + month + year;
        }
      }
test(){
    console.log(this.timeSince(1518767925245));
}
      
}

