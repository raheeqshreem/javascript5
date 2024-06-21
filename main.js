

var title = "";
title += "<h2> My Favourite Programming Languages </h2>";
document.querySelector ("div").innerHTML = title ;



var data=['c++' , 'java' , 'html'];
var result="";
for(var i=0 ; i<3 ; i++){

    result+= "<li>" + data[i] + "</li>";
}


document.querySelector ("ul").innerHTML = result;

