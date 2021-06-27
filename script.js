var btnTranslate = document.querySelector("#btn-translate");
var input=document.querySelector("#user-input");
var result=document.querySelector("#translated")
// var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// var url="https://api.funtranslations.com/translate/shakespeare.json"
var url="https://api.funtranslations.com/translate/pirate.json"
function translate(text)
{
	return url+"?text="+text;
}
btnTranslate.addEventListener("click",()=>{
	// result.innerText=input.value;
	var trns=translate(input.value);
	console.log(trns)
	fetch(trns)
	.then(resp=>resp.json())
	.then(res=>result.innerText=res.contents.translated)
	.catch(err=>console.log(err));
	console.log(input.value);
})
