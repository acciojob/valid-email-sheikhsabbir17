function validEmail(str) {
  //your JS code here.
	if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
	
	const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;

  return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));


