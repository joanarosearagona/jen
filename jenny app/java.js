unction myFunction() {
		document.getElementById("wow").innerHTML='Thank You';
		var inpObj = document.getElementById("id1");
		if (inpObj.checkValidity() == false) {
		    document.getElementById("demo").innerHTML = inpObj.validdationMessage;
		} else {
		    document.getElementById("demo").innerHTML = "To try my buttonOnClick";
		} 
		var x;
		if (confirm("Are you sure do you want to enter?") == true) {
		} else {
		x = "you press cancel";
		}
 
 }



		function myMove(id) {
			document.getElementById("anim").innerHTML='Roses';
			id.innerHTML = "Flower";
			document.getElementById("MyImage").src='roses.jpg';
			var elem = document.getElementById("animate");
			var pos = 0
			var id = setInterval(frame, 50);
			function frame() {
			 if (pos == 920) {
			   clearInterval(id);
			} else {
			pos++;
			elem.style.right = pos + 'px';
			}
		}
 }
		
		function myMove1(id) {
			document.getElementById("anim").innerHTML='Hokage Activate...';
			id.innerHTML = "HOKAGE";
			document.getElementById("MyImage2").src='haha.jpg';
			var elem = document.getElementById("animate2");
			var pos = 0
			var id = setInterval(frame, 50);
			function frame() {
			 if (pos == 920) {
			   clearInterval(id);
			} else {
			pos++;
			elem.style.right = pos + 'px';
			}
		}
 }
function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

window.onload = init;

function run1(){

	document.case.display.value += "1";
}

function run1(){

	document.case.display.value += "1";
}

function run2(){

	document.case.display.value += "2";
}

function run3(){

	document.case.display.value += "3";
}

function run4(){

	document.case.display.value += "4";
}

function run5(){

	document.case.display.value += "5";
}

function run6(){

	document.case.display.value += "6";
}

function run7(){

	document.case.display.value += "7";
}

function run8(){

	document.case.display.value += "8";
}

function run9(){

	document.case.display.value += "9";
}

function run0(){

	document.case.display.value += "0";
}

function runPlus(){

	document.case.display.value += "+";
}

function runMinus(){

	document.case.display.value += "-";
}

function runDivide(){

	document.case.display.value += "/";
}

function runMultiply(){

	document.case.display.value += "*";
}

function runC(){

	document.case.display.value = "";
}


function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}