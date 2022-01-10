
//URL Paramter Sniffer

	$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
//example:  index.html?error=yes    -->   console.log($.urlParam('error')) : yes


	  
//force two digit with paddied 0.  ex 5-> 05
           function pad(n) {
          return (n < 10) ? ("0" + n) : n;
      };  
	  
//convertm minutes to HHMM
      function convertToHHMM(info) {
        var hrs = parseInt(Number(info));
        var min = Math.round((Number(info)-hrs) * 60);

        return hrs+':'+pad(min);
      }

//format number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//date of the week
Date.prototype.getWeekDay = function() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[this.getDay()];
}

//convert thisExampleText to this Example Text
function splitWithSpace(str){
return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace('Or','or')
}

//title case
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


       
function isEven(n) {
  return n == parseFloat(n)? !(n%2) : void 0;
}


//Example Lighten:
//shadeColor("#63C6FF",40);
//Example Darken:
//shadeColor("#63C6FF",-40);
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R