var time_start;
var time_end;
var how_long_hrs;
var how_long_mins;

function start_timer() {
  time_start = new Date();
  document.getElementById('start_timer').innerHTML = time_start.toLocaleTimeString();

  localStorage.setItem("start_time_log", time_start);
}
  
function recall_start_timer() {
  time_start = new Date( localStorage.getItem("start_time_log") );
  document.getElementById('start_timer').innerHTML = time_start.toLocaleTimeString();
}

function end_timer() {
  time_end = new Date();
  document.getElementById('end_timer').innerHTML = time_end.toLocaleTimeString();
}

function how_long_f(){
 
  how_long_hrs = Math.trunc( (Math.abs(time_end - time_start) / (60000*60)) );
  document.getElementById('id_how_long_hrs').innerHTML = how_long_hrs;

  how_long_mins = ( ((Math.abs(time_end - time_start) / (60000*60)) - how_long_hrs ) * 60).toFixed(2);
  document.getElementById('id_how_long_mins').innerHTML = how_long_mins;

}

