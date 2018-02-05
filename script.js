//Vanilla JavaScript Solution
// var fruits = document.querySelectorAll(".fruit");
// var vege = document.querySelectorAll(".vege");
// var snacks = document.querySelectorAll(".snack");
// var checkout =document.getElementById("checkout");
// var shoppingCart = document.getElementsByTagName("img");
//
// document.getElementById("fruitsButton").addEventListener("click", function(){
//   for(var i=0;i<fruits.length; i++){
//     fruits[i].setAttribute("class", "unselect");
//     vege[i].removeAttribute("class", "unselect");
//     snacks[i].removeAttribute("class", "unselect");
//   }
// });
//
// document.getElementById("vegeButton").addEventListener("click", function(){
//   for(var i=0;i<fruits.length; i++){
//     vege[i].setAttribute("class", "unselect");
//     fruits[i].removeAttribute("class", "unselect");
//     snacks[i].removeAttribute("class", "unselect");
//   }
// });
//
// document.getElementById("snacksButton").addEventListener("click", function(){
//   for(var i=0;i<fruits.length; i++){
//     snacks[i].setAttribute("class", "unselect");
//     vege[i].removeAttribute("class", "unselect");
//     fruits[i].removeAttribute("class", "unselect");
//   }
// });
//
// checkout.addEventListener("click", function(){
//     checkout.innerHTML="Paid!";
// });
//
// var shoppingImg=document.getElementsByTagName('img');
// this.addEventListener("click", function(){
//
//   document.querySelector('aside').appendChild(this);
// });



//Jquery Solution

$("#fruitsButton").on('click', function(){
    $(".fruit").addClass("unselect");
    $(".vege, .snack").removeClass("unselect");

});
$("#vegeButton").on('click', function(){
  $(".vege").addClass("unselect");
  $(".fruit, .snack").removeClass("unselect");

});

$("#snacksButton").on('click', function(){
  $(".snack").addClass("unselect");
  $(".vege, .fruit").removeClass("unselect");

});
//Adding items to the cart
$('#shopping-section img').on('click', function(){
  $('aside').append($(this).clone());
});
//paying on click of the button
 $("#checkout").on('click', function(){
    $(this).html("Paid");
 });
