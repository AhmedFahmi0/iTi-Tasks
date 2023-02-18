do {
    var age = prompt("Please enter your age");
    if (age == null) break;
  

    while (Number(age) <= 0 && age !=null ) {
        
        alert("Please enter valid age");
        age = Number(prompt("Please enter your age"));
        if (age == 0) break;
       
    }
    if (age == 0) break;
    

    function showStatus() {
        if (age > 0 && age < 11) {
            alert("You are a Child");
        }

        if (age > 10 && age < 19) {
            alert("You are a Teenager");
        }

        if (age > 18 && age < 51) {
            alert("You are Grown up");
        }

        if (age > 50) {
            alert("You are Old");
        }
    }

    showStatus();
} while (true);