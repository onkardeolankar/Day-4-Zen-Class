// 1) How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// Solution:

var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

var obj1 = { name: "Person 1", age:5 };
var obj2 = { name: "Person 1", age:5 };

console.log("json is equals: "+ isEqualsJson(obj1,obj2));
    







// 2) Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

// Solution:

var xhr = new XMLHttpRequest(); 


xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send(); 


xhr.onload = function (){

if(xhr.status>=200 && xhr.status<300){
 
    var data = JSON.parse(xhr.response)
    data.forEach((item) =>{
        console.log(`
        Country Name : ${item.name}
        Country flag : ${item.flag}
        `)
    })
}
else{

    console.log("Getting error while loading the website");
}
}


// 3) Use the same rest countries and print all countries name, region, sub region and population.
// Solution:

var xhr = new XMLHttpRequest(); 

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send(); 

xhr.onload = function (){

if(xhr.status>=200 && xhr.status<300){

    var data = JSON.parse(xhr.response)
    data.forEach((item) =>{
        console.log(`
        Country Name : ${item.name}
        Country region : ${item.region}
        Country subregion : ${item.subregion}
        Country population : ${item.population}
        `)
    })
    console.log(data)
}
else{
    console.log("Getting error while loading the website");
}
}
