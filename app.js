//  document.getElementById("sales");
// var salEl=document.createElement('td')
// salEl.textContent= "";
// seattleEl.appendChild=(salEl)
var time= [6,7,8,9,10,11,12,13,14,15,16,17,18,19]


var Seattle =    
{
   
    minseattle:23,
    max:63,
    avg: 6.3,
    
    
    
   

}
var Tokyo=    
{
    
    min:8,
    max:10,
    avg:1.2
    

}
var Dubai=    
{
    
    min:8,
    max:10,
    avg:3.7
   

}
var Paris=    
{
    
    min:8,
    max:10,
    avg:2.3
   
    

}
var Lima=    
{
    
    minCustomer:8,
    max:10,
    avg:4.6

}
function randomNumber (min, max)
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
    
}
var seattleArray=[]
var tokyoArray=[]
var dubaiArray=[]
var parisArray=[]
var limaArray=[]

for(var i=0;i<14;i++)
{
// for Seattle
    var seattleNumber= randomNumber(Seattle.minseattle,Seattle.max);
    var seattleCal=Math.ceil(seattleNumber*6.3);
    seattleArray.push(seattleCal);

//   var listEl= document.getElementById("seattle");
//   var bulbaEl= document.createElement('li');
//   bulbaEl.textContent=seattleCal;
//   listEl.appendChild(bulbaEl);


    // document.write(seattleNumber,'Seattle customer')
    document.write(seattleCal,'Seattle calculation by hour')
   
    
    // // for Tokio
    // var tokyoNumer= randomNumber(Tokyo.min,Tokyo.max);
    // var tokyoCal= Math.ceil(tokyoNumber*1.2);
    // tokyoArray.push(tokyoCal);
    // document.write(tokyoCal,'Seattle calculation by hour')
    
    // // For Dubai
    // var dubaiNumer= randomNumber(Dubai.min,Dubai.max);
    // var dubaiCal= Math.ceil(dubaiNumber*3.7);
    // dubaiArray.push(dubaiCal);
    // console.log(dubaiNumber,'Dubai customer');
    // console.log(dubaiCal,'Dubai calculation by hour');

}
console.log(seattleArray);
console.log(tokyoArray);
console.log(dubaiArray);


// var seattleNumber= randomNumber(Seattle.min,Seattle.max);
// var tokyoNumber= randomNumber(Tokyo.min,Tokyo.max);
// var dubaiNumber= randomNumber(Dubai.min,Dubai.max);
var parisNumber= randomNumber(Paris.min,Paris.max);
var limaNumber= randomNumber(Lima.min,Lima.max);
console.log(seattleNumber,'Seattle customer');
console.log(tokyoNumber,'tokyo customer');
console.log(dubaiNumber,'Dubai customer');
console.log(parisNumber,'Paris customer');
console.log(limaNumber,'Lima customer');
randomNumber();


