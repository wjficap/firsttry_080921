var input_memo;

function record() {
      
  input_memo = '&#11088 ' + document.getElementById('id_input').value;
  
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


  /* Select the text field */
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */

  alert(copyText);

  navigator.clipboard.writeText(copyText);

}
