//a). Get all the countries from the Asia continent /region using the Filter function

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload = function(){
//     var result= JSON . parse(request.response);
//     var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
//     console.log(res);
// }


// //b). Get all the countries with a population of less than 2 lakhs using Filter function

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload = function(){
//     var result= JSON . parse(request.response);
//     var res=result.filter((ele)=>ele.population<200000);
//     console.log(res)
// }


// c). Print the following details name, capital, flag using forEach functionf
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var result= JSON . parse(request.response);
    var res=result.forEach((element)=>console.log(element.name,element.capital,element.flag));
    console.log(res);
}

// //d). Print the total population of countries using reduce function
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload = function(){
//     var result= JSON . parse(request.response);
// var a=result.reduce((acc,cv)=>acc+cv.population,0);
//     console.log(a);
// }

// // e). Print the country which uses US Dollars as currency.
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload = function(){
//     var result= JSON . parse(request.response);
//     var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
//     console.log(res);
// }




