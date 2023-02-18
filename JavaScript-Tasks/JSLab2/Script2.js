var InputString = prompt("Please Enter A String");
var count = 0;
for (let i = 0; i < InputString.length; i++) {
    var ch = InputString.charAt(i);
    if (ch == 'a' || ch == 'o' || ch == 'e' || ch == 'u' || ch == 'i' ||ch == 'A' || ch == 'O' || ch == 'E' || ch == 'U' || ch == 'I') {
        count++;
    }

}
alert("number of vowles =  " + count);