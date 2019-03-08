/* Read more */

$(document).ready(function(){
  $(".button").click(function () {
    var div= $("#"+this.name);
    div.toggle("slow").siblings().hide("slow");
  });
});  

/* function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
} */

$("#skills").click(function () {
  if ($(".mytext").is(":visible")) $(".mytext").hide()
  else $(".mytext").show();
});