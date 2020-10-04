for(var i =1; i<=12; i++)
{
	document.write("<tr>");
	for(var k=0; k<=59; k++)
		{
			
			document.write("<td>"+i +" : "+k+"</td>");	
		}
	document.write("</tr>"); 
	}
	

window.addEventListener("load",function(){
function displaying(){
var today = new Date();

var minute=0;
var hour =0;
var hourf=0;
var finaltime =0;


hour =parseInt(today.getHours());
if(hour>12)
{
	hour = hour-12;
}
hourf = parseInt((hour-1)*60);



minute = parseInt(today.getMinutes());
 finaltime =parseInt( hourf + minute);
document.getElementsByTagName("td")[finaltime-1].style.backgroundColor = "white" ;
document.getElementsByTagName("td")[finaltime].style.backgroundColor = "yellow" ;
}
setInterval(displaying,100);
});




