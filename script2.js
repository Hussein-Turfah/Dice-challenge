window.onload = function(){
var dice1 = document.getElementsByClassName("dice1");
var dice2 = document.getElementsByClassName("dice2");

document.getElementById('refresh').addEventListener('mouseover',function(){
  location.reload()
}
)
const dice1_number = Math.floor(Math.random() * dice1.length);
console.log(dice1_number + 1)
for (var i = 0; i < dice1.length; i++){
  dice1[i].style.display = 'none'
} 
dice1[dice1_number].style.display = ''
console.log('hello working')


const dice2_number = Math.floor(Math.random() * dice2.length);
console.log(dice2_number + 1)
for (var i = 0; i < dice2.length; i++){
  dice2[i].style.display = 'none'
} 
dice2[dice2_number].style.display = ''
console.log('hello working')
}