

 $( document ).ready(function() {
 
 
      if(window.innerWidth<770){
	 document.getElementById('menu_icon').style.display='block';
	  document.getElementById('nav').style.display='none';
	  document.getElementById("nav").className = "nav_mobile";
	 }else{
	 document.getElementById('menu_icon').style.display='none';
	 document.getElementById('nav').style.display='block';
	 document.getElementById("nav").className = "nav";
	 }
	 
	 
	   $(".search input[type='text']").focusin(function() {
if(window.innerWidth>799){
      $( ".search input[type='text']" ).animate({ width: "170px"},{queue:false, duration:200}) ;
}
});


$(".search input[type='text']").focusout(function() {
if(window.innerWidth>799){
      $( ".search input[type='text']" ).animate({ width: "140px"},{queue:false, duration:200}) ;
	}
});


});
 

window.onresize = function(event) {


if(window.innerWidth<800){
$( ".search input[type='text'] " ).css( "width", "100%" );
}else{
 $( ".search input[type='text'] " ).css( "width", "140px" );
 }

     if(window.innerWidth<770){
	 document.getElementById('menu_icon').style.display='block';
	  document.getElementById('nav').style.display='none';
	  document.getElementById("nav").className = "nav_mobile";
	 }else{
	 document.getElementById('menu_icon').style.display='none';
	 document.getElementById('nav').style.display='block';
	 document.getElementById("nav").className = "nav";
	 }
};

function menu(){
if(window.innerWidth<770){
if($('#nav').css('display') == 'none'){
 $("#nav").show("slow");
}else{
 $("#nav").hide("slow");
}
 }
 }