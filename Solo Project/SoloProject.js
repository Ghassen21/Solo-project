function makeCard(src,title,decription){
	return $(`<div class="card">
	<img class="img" src="`+src+`"> 
	<h1 class="title">`+title +`</h1> 
	<p class="description">`+ decription+`</p>
	<a href='https://www.ultimatespecs.com/car-specs/BMW/71987/BMW-F32-4-Series-Coupe-420d.html' target="_blank">
	<button  class="readme" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTktKs7xgRbMF2msLXd5xcc6rjWhN6fZM-p3w&usqp=CAU"></button>
		</a></div>`)
}

 function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }

var bmw =[{src:"https://www.bmw-tunisia.com/content/dam/bmw/common/all-models/4-series/coupe/2019/inform/bmw-4-series-coupe-inform-cs-engines-01.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1549016094102.jpg",
title:" Engine Technical Data",decription:"With a fuel consumption of 4.2...Clik to read more"},{src:"https://www.bmw-tunisia.com/content/dam/bmw/marketB4R1/bmw-tunisia_com/technicaldata/BMW_4_Series_Coupe_F32_17_08_19/images/bmw_418i_coup%C3%A9/bmw-4-series-coupe-inform-technical-data.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1549613801403.jpg",
title:" Dimension and Weight",decription:"With a fuel consumption of 4.2...Clik to read more"},{src:"https://discover.bmw.co.uk/technology/efficientdynamics/energy-management/image-thumb__10552__960x540/energy-management-technologies-1-600x338.jpeg",
title:"Fuel Consumption",decription:"With a fuel consumption of 4.2...Clik to read more"}]




function addcar(car){
var cards = map(car,function(carinfo){
return makeCard(carinfo.src,carinfo.title,carinfo.decription)
})
var $container =  $(`<div class="container"></div>`)
$container.append(...cards)
$("body").append($container)
}
addcar(bmw)
// window.onload = function (){
// var button = document.getElementByClassName("readme")
// button.onclick=function(){
// 	"https://www.ultimatespecs.com/car-specs/BMW/71987/BMW-F32-4-Series-Coupe-420d.html"

// }

// }
