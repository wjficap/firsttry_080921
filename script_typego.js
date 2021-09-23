var input_memo;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear().toString().substring(2);
today_date = dd + mm + yyyy + ": ";


function record() {
      
  input_memo = today_date + document.getElementById('id_input').value;
  
  // '&#11088 '

  document.getElementById('id_show').innerHTML = input_memo + "<br>" + document.getElementById('id_show').innerHTML ;

  localStorage.setItem("input_memo_log", document.getElementById('id_show').innerHTML);
  
  document.getElementById('id_input').value = "";

}

function recall() {
  document.getElementById("id_show").innerHTML = localStorage.getItem("input_memo_log");
  
}

function clear_all() {
  localStorage.clear();
  document.getElementById('id_show').innerHTML = null;
  
}

function copy_all() {
  var copyText = document.getElementById('id_show').innerText;
  navigator.clipboard.writeText(copyText);

}
