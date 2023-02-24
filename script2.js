window.onload = function(){
var dice = document.getElementsByClassName("dice");
document.getElementById('refresh').addEventListener('mouseover',function(){
  location.reload()
}
)
const repeats_number = Math.floor(Math.random() * dice.length);
console.log(repeats_number + 1)
for (var i = 0; i < dice.length; i++){
  dice[i].style.display = 'none'
} 
dice[repeats_number].style.display = 'block'
console.log('hello working')
}