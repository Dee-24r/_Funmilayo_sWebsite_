// Typewriter thing
const text =  "Tech Girl ● Jovial nature ● Love learning";
let i = 0;
const typeTarget = document.getElementById("type");

function typeWriter(){
    if (i < text.length){
        typeTarget.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // speed
    }
}

if (typeTarget){
    typeWriter();
}


const projectsCarousel = document.getElementById("projectsCarousel");

if (projectsCarousel){
    const viewport = projectsCarousel.querySelector(".projects-viewport");
    const track = projectsCarousel.querySelector(".projects-track");
    const prevBtn = document.getElementById("projectsPrev");
    const nextBtn = document.getElementById("projectsNext");
    const cards = Array.from(track.querySelectorAll(".project-card"));
    let index = 0;
    let cardStep = 0;
    let startX = 0;

    function getVisibleCount(){
        if (window.innerWidth <= 640){
            return 1;
        }

        if (window.innerWidth <= 900){
            return 2;
        }

        return 3;
    }

    function refreshStep(){
        if (cards.length === 0){
            cardStep = 0;
            return;
        }

        const gapValue = window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap;
        const gap = Number.parseFloat(gapValue) || 0;
        cardStep = cards[0].getBoundingClientRect().width + gap;
    }

    function moveTo(newIndex){
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, cards.length - visibleCount);
        index = Math.min(Math.max(newIndex, 0), maxIndex);
        track.style.transform = `translateX(-${index * cardStep}px)`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === maxIndex;
    }

    function setupCarousel(){
        refreshStep();
        moveTo(index);
    }

    nextBtn.addEventListener("click", () => moveTo(index + 1));
    prevBtn.addEventListener("click", () => moveTo(index - 1));

    viewport.addEventListener("touchstart", (event) => {
        startX = event.changedTouches[0].clientX;
    }, { passive: true });

    viewport.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if (Math.abs(deltaX) < 40){
            return;
        }

        if (deltaX < 0){
            moveTo(index + 1);
        } else {
            moveTo(index - 1);
        }
    }, { passive: true });

    window.addEventListener("resize", setupCarousel);
    setupCarousel();
}


/*var msg = "Hello World!";
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
}*/

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
    
    <script src="app.js"></script>
</body>
</html> */