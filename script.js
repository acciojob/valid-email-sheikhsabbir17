function validEmail(str) {
  //your JS code here.
	const pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+(\.[A-Za-z0-9_]{2,3})+$/;

  return pattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));


