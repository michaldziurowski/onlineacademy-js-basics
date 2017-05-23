function doSth() {
	var a = "sth";

	function innerFn() {
		console.log(a);
	}

	return innerFn;
}

var doIt = doSth();

doIt();