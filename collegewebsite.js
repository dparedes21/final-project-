tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

              <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>

              <script>
              // Get the element with id="defaultOpen" and click on it
              document.getElementById("defaultOpen").click();
              </script>


                                  <div id="London" class="tabcontent">
                                  <h3>London</h3>
                                  <p>London is the capital city of England.</p>
                                  <span onclick="this.parentElement.style.display='none'">x</span>
                                  </div>
