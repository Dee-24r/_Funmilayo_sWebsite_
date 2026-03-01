var msg = "Hello World!";
console.log(msg);
alert(msg);

let base = 10;
let height = 5;

let area = (base * height) / 2;
console.log("The area of the triangle with base " + base + " and height " + height + " is " + area);

//Add two numbers and display the result
function addNumbers(num1, num2){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    let sum = parseFloat(number1) + parseFloat(number2);
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Add Numbers</h1>
    <p>Enter two numbers to add:</p>
    <input type="number" id="num1" placeholder="First number"><br>
    <input type="number" id="num2" placeholder="Second number"><br>
    <button onclick="addNumbers()">Add</button><br>
    <p id="result"></p>
    
    <script src="addNumbers.js"></script>
</body>
</html> */