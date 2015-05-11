 function a() {
     $("#step2").hide();
 }
 window.onload = a;
 $(document).ready(function() {
     $("#btn1").click(function() {
         $("#step1").animate({
             right: '700px'
         }, 50).hide(50);
         $("#step2").show(300);
     });
 });
 song = document.getElementById("song");

 function enableAutoplay() {
     song.autoplay = true;
     song.load();
 }
