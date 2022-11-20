<?php
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

?>
  // postMessage is used to post a message back to the HTML page