$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function displayText() {
	var TrueFalse = random();
	alert(TrueFalse);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}

function random(){
    return !Math.round(Math.random());
}