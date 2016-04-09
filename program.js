/**
Cartwright, Stephen D
program.js 8/27/14
program.html 8/27/14

**/

 function shift() {
	var text = document.getElementById("textbox").value; 
	var flag = document.getElementById("decrypt").value;
 	var offset = document.getElementById("number").value;
 	
 	
	 
	 var str = "";
     var c = "";

     for(i = 0; i < text.length; i++){
		 c = text.charCodeAt(i) + offset*flag
        
         str = str.concat(String.fromCharCode(c));
     }
	 
	 window.alert(str);
	 
	/*
	var number, result_dir, result_letter;
	
	number = document.getElementById("number").value;
			
			
			//result_letter = (number & (0x1A));
			result_letter = (number % (0x1A));
			//result_dir = number & (0x1F) >> 5;
			result_dir = (function () {
				var count = 0, n = (number & (0xFFFFFF));
				while(n != 0){
					
					n = n & (n - 1);
					count++;
				}
				((count %= 2) == 0)	? count = 0 : count = 1		
				return count;
			})();
				
			window.alert("letter, direction: " + result_letter + " " + result_dir);
	*/



 }

/*
 odd or even let it shift in that direction
 let it shift by that many places mod alphabet size 
 then we can always determine by one number direction and complexity
 thats for one number encoding 
 
 more advanced will be a set of numbers to be parsed negative numbers must be used to decode to slap a negative in front
 for it to do so 
 
 */