/// <reference types="../@types/jquery"/>

$('.menu-icon').on("click" , function(){
    $(".nav-menu").removeClass("d-none" )
    $(".nav-menu").animate({width:"200px"} , 100)
})

$(".btn-colse").on("click" , function(){
    $(".nav-menu").addClass("d-none")
})


$('.signers h2').on("click",function(){
    $('.signer').not($(this).next()).slideUp();
    $(this).next().slideToggle();
});


var x = setInterval(function() {
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second


  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = "- " + days + " D "
  document.getElementById("hours").innerHTML = hours + " h "
  document.getElementById("minutes").innerHTML = minutes + " m "
  document.getElementById("seconds").innerHTML = seconds + " s "
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var maxLength = 100;
$('textarea').on("keyup" ,(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
}));