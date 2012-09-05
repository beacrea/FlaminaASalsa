// Form Validation/Processing
$(function() {
  $('.error').hide();

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var message = $("textarea#comment").val();
		if (message == "") {
      $("label#comment_error").show();
      $("textarea#comment").focus();
      return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "contact.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("");
        });
      }
     });
    return false;
	});
});