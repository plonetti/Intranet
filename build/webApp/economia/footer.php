<footer class="w3-panel w3-padding-32 w3-card-4 w3-light-grey w3-center w3-opacity">
  <p><nav>
  <a href="/forum/default.asp" target="_blank">FORUM</a> |
  <a href="/about/default.asp" target="_top">ABOUT</a>
  </nav></p>
</footer>

<!-- END MAIN -->
</div>

<script>
// Script to open and close the sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function w3_show_nav(name) {
  document.getElementById("menuTut").style.display = "none";
  document.getElementById("menuRef").style.display = "none";
  document.getElementById(name).style.display = "block";
  w3-open();
}
</script>

<script src="https://www.w3schools.com/lib/w3codecolor.js"></script>

<script>
w3CodeColor();
</script>

</body>
</html>
