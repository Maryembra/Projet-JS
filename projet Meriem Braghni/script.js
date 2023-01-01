var course = document.querySelector('.course');

function creationCours(path, titre, prix) {
    
    course.innerHTML += "<div class=\"col-3 card me-2 mb-2\" id=\"courses\"><img src=\""
     + path + "\" alt=\"\" class=\"card-img\" id=\"img\"> <p class=\"card-title\" id=\"title\">" + titre + 
     "</p><span class=\"card-text\"id=\"prix\">" +"$"+ + prix + "</span></div>";
}
courses.forEach((element) => {
    creationCours(element.image, element.title, element.price)
})
document.getElementById("html").addEventListener("click", function(){
     var el =document.getElementsByClassName("col-3 card me-2 mb-2");
     for(let i=0;i<el.length;i++){
         el[i].parentNode.removeChild(el[i]);
     i--;}
     var course = document.querySelector('.course');
     courses.forEach((element) => {
         if(element.category.toUpperCase()=='HTML')
         creationCours(element.image, element.title, element.price)
     }) 

 })
 document.getElementById("js").addEventListener("click", function(){
    var el =document.getElementsByClassName("col-3 card me-2 mb-2");
    for(let i=0;i<el.length;i++){
        el[i].parentNode.removeChild(el[i]);
    i--;}
    var course= document.querySelector('.course');
    courses.forEach((element) => {
        if(element.category.toUpperCase()=='JS')
        creationCours(element.image, element.title, element.price)
    }) 

})
document.getElementById("css").addEventListener("click", function(){
    var el =document.getElementsByClassName("col-3 card me-2 mb-2");
    for(let i=0;i<el.length;i++){
        el[i].parentNode.removeChild(el[i]);
    i--;}
    var course = document.querySelector('.course');
    courses.forEach((element) => {
        if(element.category.toUpperCase()=='CSS')
        creationCours(element.image, element.title, element.price)
    }) 

})
document.getElementById("php").addEventListener("click", function(){
    var el =document.getElementsByClassName("col-3 card me-2 mb-2");
    for(let i=0;i<el.length;i++){
        el[i].parentNode.removeChild(el[i]);
    i--;}
    var course = document.querySelector('.course');
    courses.forEach((element) => {
        if(element.category.toUpperCase()=='PHP')
        creationCours(element.image, element.title, element.price)
    }) 

})
document.getElementById("all").addEventListener("click", function(){
    var el =document.getElementsByClassName("col-3 card me-2 mb-2");
    for(let i=0;i<el.length;i++){
        el[i].parentNode.removeChild(el[i]);
    i--;}
    var course = document.querySelector('.course');
    courses.forEach((element) => {
        creationCours(element.image, element.title, element.price)
    }) 

})



function myFunction() {
  var x = document.getElementById("Search1");
   var el =document.getElementsByClassName("col-3 card me-2 mb-2");
   for(let i=0;i<el.length;i++){
       el[i].parentNode.removeChild(el[i]);
   i--;}
   var course = document.querySelector('.course');
   courses.forEach((element) => {
       if(element.category.toUpperCase()==x.value)
       creationCours(element.image, element.title, element.price)
   })
}
var slider = document.getElementById("range1");
slider.addEventListener("change",function(){
    document.getElementById('showprice').innerHTML=document.getElementById('range1').value;
    /*-----------delete elements----------*/
    var el =document.getElementsByClassName("col-3 card me-2 mb-2");
    for(let i=0;i<el.length;i++){
        el[i].parentNode.removeChild(el[i]);
    i--;}
   
       /*--------creation de nv element-------*/
   var course = document.querySelector('.course');
   courses.forEach((element) => {
       if(element.price<slider.value)
       creationCours(element.image, element.title, element.price)
       
   }) 
})
