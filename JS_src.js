let task;
let input = prompt("Choose your task number (1-9)");

switch (input){

    /*======== Operation ========*/ 
    case "1":
        let operate = prompt("Choose an operation");
        let num1 = Number(prompt("First number"));
        let num2 = Number(prompt("Sceond number"));
        switch(operate){
            case "+":
                sum = num1+num2;
            case "*":
                sum = num1+num2;
            case "-":
                sum = num1+num2;
            case "/":
                sum = num1+num2;
        }
        console.log(sum);
        document.getElementById("result").textContent = num1 + operate + num2 + "=" + sum;
    break;




    /*========= Marks =======*/ 
    case "2":
        let mark = Number(prompt("Enter your mark:"));
        if (mark<50){
            document.write("FAIL");
        } else if (mark < 60){
            document.write("D");
        } else if (mark < 70){
            document.write("C");
        } else if (mark < 80){
            document.write("B");
        } else if (mark < 90){
            document.write("A");
        } else if (mark <= 100){
            document.write("A+");
        }
        break;




    /*======== Circle Area ========*/ 
    case "3":
        let target = Number(prompt("Enter radius of circle"));
        let area = (Number^2)* Math.PI;
        console.log(area);
        break;




    /*========= Hello or Goodbye =======*/ 
    case "4":
        let x = Number(prompt("Enter the value for x"));
        let y = Number(prompt("Enter the value for y"));
        if (x>y){
            console.log("Hello World!");
            alert("Hello World!");
            document.getElementById("result").textContent = "Hello World!";
        } else {
            console.log("Goodbye!");
            alert("Goodbye!");
            document.getElementById("result").textContent = "Goodbye!";
        }
        break;




    /*========= Sum and Multiple =======*/ 
    case "5":
        let x1 = Number(prompt("x = "));
        let y1 = Number(prompt("y ="));
        let sum1 = x1+y1;
        let mult1 = x1*y1;
        console.log(`Sum = ${sum1}.<br> Multiplication = ${mult1}`)
        /*console.log("The sum is:" + sum1 + "The mult is:" + mult1);*/
        document.write(`Sum = ${sum1}.<br> Multiplication = ${mult1}`);
        break;




    /*========= Name, Age, and City =======*/ 
    case "6":
        let name = prompt("What's your name?");
        let age = Number(prompt("What's your age?"));
        let city = prompt("Where are you from?");
        console.log(`Hello ${name}! <br>
             You are ${age} years old and you live in ${city}`);
        document.write(`Hello ${name}! <br> 
            You are ${age} years old and you live in ${city}`);
        alert(`Hello ${name}! <br>
             You are ${age} years old and you live in ${city}`);
        break;




    /*========== Odd or Even ======*/ 
    case "7":
        let number1 = Number(prompt("Enter any number"));
        if (number1%2==0){
            alert(`The number ${number1} is even`);
        } else {
            alert(`The number ${number1} is odd`);
        }
        break;




    /*========= What's your age =======*/ 
    case "8":
        let theage = Number(prompt("what's your age?"));
        if (theage < 13){
            alert("you are a Child");
            console.log("you are a Child");
        } else if (theage < 19){
            alert("you are a Teenager");
            console.log("you are a Teenager");
        } else if (theage < 60){
            alert("you are an Adult ");
            console.log("you are an Adult");
        } else if (theage >= 60){
            alert("you are a Senior");
            console.log("you are a Senior"+ theage);
        }
        break;




    /*========= Username and Password =======*/ 
    case "9":
        user = prompt("Username:");
        pass = prompt("Password:");
        if (user=="admin" && pass=="1234"){
            alert("Login successful");
            console.log("Login successful");
        } else {
            alert("Invalid username or password");
            console.log("Invalid username or password");
        }
        break;
}

