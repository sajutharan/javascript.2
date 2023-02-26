// map

    // Init  a map
    function initMap() {
    //map location
    var center = {lat: 37.7749, lng: -122.4194};
    // The map options
    var options = {
    zoom: 20,
    center: center
    }
    // Create a new map
    var map = new google.maps.Map(document.getElementById("map"), options);
    }
//map end
//form start
function validate(){
    var firstName=document.getElementById("1stName").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var re1=/^[A-Za-z.]{2,23}$/;
    var re2= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var re4=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (re1.test(fn)){
        document.getElementById("t1").innerHTML=""   
    }else if (fn==""){
        document.getElementById("t1").innerHTML="Please enter first name"; 
    } else{
        document.getElementById("t1").innerHTML="Name must be between 2 and 23 characters";
    }
    if (re1.test(ln)){
        document.getElementById("t2").innerHTML=""; 
         
    
    }else if (ln==""){
        document.getElementById("t2").innerHTML="Plese enter last name"; 
    } else {
        document.getElementById("t2").innerHTML="Name must be between 2 and 23 characters";
    }
    if(re2.test(email)){
        document.getElementById("t3").innerHTML=""; 
    }else if (email==""){
        document.getElementById("t3").innerHTML="Please enter email"; 
    }else {
        document.getElementById("t3").innerHTML="Email is invalid";
    }
    if(re4.test(phone)){
        document.getElementById("t4").innerHTML=""; 
        
    }else if (phone==""){
        document.getElementById("t4").innerHTML="Please enter phone number";
        return false; 
    }else{
        document.getElementById("t4").innerHTML="Phone Number is invalid";
        return false
    }
}



// mouseover button 1
var button1=document.getElementById("button1");
button1.addEventListener("mouseover",function(){button1.style.backgroundColor="lightlue".color="black"});
// mouseout button 1
var button1=document.getElementById("button1");
button1.addEventListener("mouseout",function(){button1.style.backgroundColor="blue"});
// mouse over button 2
var button2=document.getElementById("button2");
button2.addEventListener("mouseover",function(){button2.style.backgroundColor="lightblue".color = "black"});

// mouseout button 2
var button2=document.getElementById("button2");
button2.addEventListener("mouseout",function(){button2.style.backgroundColor="blue"});
 

// section 2 img carosel start 
var images = ['/image/recropquilling/sec2carosil.jpg','/image/recropquilling/sec2carosil2.jpg','/image/recropquilling/sec2carosil3.jpg'];
var i =0;
function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
           i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()" , 2000);
}
window.onload = slideShow;

// sec 3 zoom in zooom out start from here
var zoomImage=document.getElementById("img2");
zoomImage.addEventListener("mouseover",function(){zoomImage.style.transform="scale(1.2"});
// zoom out
var zoomOutImage=document.getElementById("img2");
zoomOutImage.addEventListener("mouseout",function(){zoomOutImage.style.transform="scale(0.70)"});


// page loader
// const loader = document.getElementById("loader");
// window.addEventListener("load", function() {
// setTimeout(function() {
//     loader.style.display = "none";
//     content.style.display = "block";
// }, 500);
// });

// image filter js

const items = document.querySelectorAll(".filter");
const Fbutton = document.querySelectorAll(".Fbutton");
Fbutton.forEach(Fbutton => Fbutton.addEventListener("click", filterItems));

function filterItems() {
  const category = this.id;
  items.forEach(filter => {
    filter.style.display = "none";
    if (filter.classList.contains(category) || category === "All") {
      filter.style.display = "block";
    }
  });
}


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// animation

  // var img = document.getElementById("img1");
  // var pos = 0;
  // var id = setInterval(frame, 5);

  // function frame() {
  //   if (pos == 350) {
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     img.style.left = pos + "px";
  //   }
  // }


  var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
