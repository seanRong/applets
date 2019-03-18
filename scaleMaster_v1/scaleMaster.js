function deltaP() {
var score = document.getElementById('score').value;
if(document.getElementById('correct').checked) {
  var d = (((score/100) * 44) - 1)/43; 
  alert(d*100 + " percent"); 
}else if(document.getElementById('incorrect').checked) {
  var e = ((score/100) * 44)/43; 
  alert(e*100 + " percent"); 
} 

}


