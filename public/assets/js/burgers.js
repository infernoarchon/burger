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
  
    // $(".update-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var updatedQuote = {
    //     author: $("#auth").val().trim(),
    //     quote: $("#quo").val().trim()
    //   };
  
    //   var id = $(this).data("id");
  
    //   // Send the POST request.
    //   $.ajax("/api/quotes/" + id, {
    //     type: "PUT",
    //     data: updatedQuote
    //   }).then(
    //     function() {
    //       console.log("updated quote");
    //       // Reload the page to get the updated list
    //       location.assign("/");
    //     }
    //   );
    // });
  });