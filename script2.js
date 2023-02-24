window.onload = function(){
var dice = document.getElementsByClassName("dice");
document.getElementById('refresh').addEventListener('mouseover',function(){
  location.reload()
}
)
const dice_number = Math.floor(Math.random() * dice.length);
console.log(dice_number + 1)
for (var i = 0; i < dice.length; i++){
  dice[i].style.display = 'none'
} 
dice[dice_number].style.display = 'block'
console.log('hello working')
}