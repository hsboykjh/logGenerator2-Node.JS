require('date-utils');

var today = new Date();
var settingDay = new Date(0);
//var todayDate = today.toFormat('YYYYMMDDHHMM');
//var time = today.toFormat('HH:MM:SS');

//settingDay.setDate (today.getDate() - 10);

var t = new Date(1980,1,3);
var t2 = new Date();
t2.setTime(t.getTime());
console.log('kkkk' + t+'  , '+t2);
t.setTime(0);
console.log('kkkk' + t+'  , '+t2);
t2.setTime(t.getTime());
console.log('kkkk' + t+'  , '+t2);



function SetTimeTest(newtime){
	   var d, s;                  //Declare variables.
	   d = new Date();            //Create Date object.
	   d.setTime(newtime);        //Set time.
	   s = "Current setting is ";
	   s += d.toUTCString();
	   return(s);                 //Return new setting.
	}


//console.log("today : "+today);
console.log("settingDay : "+settingDay);
//console.log("today : "+today.toFormat('YYYYMMDDHHMM'));
console.log("settingDay : "+settingDay.toFormat('YYYYMMDDHHMMSS'));
//console.log("today : "+today.toFormat('HH:MM:SS'));
console.log("settingDay : "+settingDay.toFormat('HH:MM:SS'));


var t4 = new Date();

for(var count = 0 ; count < 100 ; count++){
	
	t4.addMinutes(2);
	//settingDay.addMilliseconds(10000);
	console.log("t4 : "+t4.toFormat('YYYYMMDDHHMISS'));
	
}

//
//t4.addMilliseconds(2000); // add milliseconds to existing time
//console.log("111t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addSeconds(5); // add seconds to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addMinutes(2); // add minutes to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addHours(1); // add hours to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addDays(2); // add days to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addWeeks(3); // add weeks to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addMonths(4); // add months to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
//t4.addYears(2); // add years to existing time
//console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));

t4.addDays(-2); // add years to existing time
console.log("t4 : "+t4.toFormat('YYYYMMDDHHMMSS'));
console.log("t4 : "+t4.getTime());

var t5 = new Date(02/13/1981);
console.log("t5 : "+t5.toFormat('YYYYMMDDHHMMSS'));
console.log("t5 : "+t5.getTime());

/*
require('date-utils');
var config = require("./config.js");


var strftime = require('strftime');
console.log(strftime('%H:%M:%S')); // => April 28, 2011 18:21:08
console.log(strftime('%F %T', new Date(1307472705067))); // => 2011-06-07 18:51:45
*/

/*
var aaa = "korea.html";


var Config = new config("sdplog.conf");

var listLogExp = Config.getLogExp();
console.log(listLogExp.length);

for(var count = 0 ; count < listLogExp.length ; count++){
	var listItem = listLogExp[count];
	console.log(listItem);
	console.log(listItem.expression);
	console.log(listItem.replace);
}


console.log(aaa.replace(/(.+)\.html/,"\\$1"));
//결과 : "\korea"

//var timestamp = this.getTimeStamp();
var todayDate = new Date().toFormat('YYYYMMDDHHMM');
var time = new Date().toFormat('HH:MM:SS');

var test = "\d{2}:\d{2}:\d{2}";
console.log(test);
console.log(test.replace(/\\/, "bbb"));

var log = "00:14:04[049] 201301010013,P000000006,HE_DTV_GP4I_AFAAABAA,GP4I,EU,AT,ger,/rest/sdp/v3.0/c2.2/country.xml,GET,C0:41:F6:57:BC:01";

var myRe = new RegExp("\\d{2}:\\d{2}:\\d{2}");


console.log(log.replace(myRe, time));
var myArray = log.replace(myRe, time);//myRe.exec(log);
console.log("myArray : "+ myArray);

console.log(log.replace(/\d{2}:\d{2}:\d{2}/, time));

*/

/*
console.log("test" + count++);
console.log("test" + count++);
console.log("test" + count++);
console.log("test" + count++);
console.log("test" + count++);


function logGen(){
	console.log("test" + count++);
}

setInterval( logGen(), 1000);




function UserException(message) {
   this.message = message;
   this.name = "UserException";
}
function getMonthName(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("InvalidMonthNo");
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   monthName = getMonthName(myMonth);
} catch (e) {
   monthName = "unknown";
   console.log(e.message + e.name); // pass exception object to err handler
}

*/


