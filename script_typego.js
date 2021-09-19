var input_memo;

function record() {
      
  input_memo = '&#x2022 ' + document.getElementById('id_input').value;
  
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

