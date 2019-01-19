// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour-button").on("click", function(event) {
      // Make sure to preventDefault on a submit event
  
      var updatedBurger = {
        devoured: true
      };
  
      var id = $(this).data("id");
      var burgername = $(this).data("name")
      console.log(id)
      console.log(burgername)
      // Send the POST request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
      }).then(
        function() {
          console.log(this);
          // Reload the page to get the updated list
          location.reload()
        }
      );
    });
  });