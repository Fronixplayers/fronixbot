	//Validtion Code For Inputs

	function checkPassword() {
		var password = document.getElementById("password").value;
		if (password === "kat@") {
		  window.location.href = "d1.html";
		} else {
		  document.getElementById("message").innerHTML = "Incorrect code. Contact To Founder or CEO.";
		}
	  }
	  