//your code here
		document.getElementById('openModal').onclick = function() {
  document.getElementById('myModal').style.display = "block";
}

// Close the modal when clicking outside of it or on the close button
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.close-modal').onclick = function() {
  document.getElementById('myModal').style.display = "none";
}


// Lorem ipsum dolor sit amet, conseteur adipsicing elit, Integer nec odio. Preesent libero, Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperidiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue sumper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 













