function firstNonRepeatedChar(str) {
 // Write your code here
	for(i=0;i<str.length;i++){
    char = str[i];
    if(str.indexOf(char)==i&&str.indexOf(char,i+1)==-1){
      return char;
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
