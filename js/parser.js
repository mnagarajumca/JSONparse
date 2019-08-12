//Parser Function to Parse Input Data
/*Assumption : Input data is passed as object similar to below
{
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },{},{}
	]
}
  */
function parser(input){	
	//Get the Successful parsed address
	let SuccessInfo  = input.pages.map((item,index)=>{
		return item.address;
	});  
	//Get the Skipped and Invalid address
	let SkippedInfo=[];
	let ErrorInfo =[];
	let parserItems  = input.pages.map((item,index)=>{		
		let linksmap=item.links.map((link,index)=>{
			if(SuccessInfo.indexOf(link) != -1){
				if(SkippedInfo.indexOf(link) == -1){
					SkippedInfo.push(link)
				}
			}else{
				if(ErrorInfo.indexOf(link) == -1){
					ErrorInfo.push(link)
				}
			}
		})
	});
	console.log( SuccessInfo); 
	console.log( SkippedInfo);   
	console.log( ErrorInfo);  
	document.getElementById("Success-item").innerHTML = "Success:"+JSON.stringify(SuccessInfo);
	document.getElementById("Skipped-item").innerHTML = "Skipped:"+JSON.stringify(SkippedInfo);
	document.getElementById("Error-item").innerHTML = "Error:"+JSON.stringify(ErrorInfo);
}
//Parse Data on Submit Click
document.getElementById("parser").addEventListener("click",function(){	
	if(!document.getElementById("parser-input").value){
		alert("Please Enter the Input to be Parsed");
	}else{
		parser(JSON.parse(document.getElementById("parser-input").value));
	}
});