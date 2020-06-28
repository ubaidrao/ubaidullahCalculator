function getNumber(num){
	var inputNum=document.getElementById("in");
	inputNum.value += num;			
}
function getOperator(operater){
	var inputNum=document.getElementById("in");
	inputNum.value += operater;	
}
function clear(){
	var num1 = document.getElementById("in");
	num1.value = "";
	var num2 = document.getElementById("out");
	num2.value = "";
}
function clearOne(){
	var inputNum=document.getElementById("in");
	var x=inputNum.value;
	if(x.length>0){
		x=x.substring(0,x.length-1);
		inputNum.value=x;
	}
}
function compute(){
	var inputNum=document.getElementById("in");
	ans=Math.floor(+eval(inputNum.value));
	document.getElementById("out").value=ans;
}
var temp=0;
function bracket(){
	var inputNum=document.getElementById("in");
	if(temp==0){
		inputNum.value+='(';
		temp=1;
	}
	else if(temp==1){
		inputNum.value+=')';
		temp=0;
	}
}