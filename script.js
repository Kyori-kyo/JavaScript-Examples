let counter = 0;

function count() {

    counter++;
    document.querySelector('h2').innerHTML = counter;

    if (counter % 10 === 0)
    alert(`Count is now ${counter}!`)

};

function hello () {

    if (document.querySelector('h1').innerHTML === 'Hello') {
        document.querySelector('h1').innerHTML = "Goodbye";
    } else {
        document.querySelector('h1').innerHTML = "Hello";
    }
        
};

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector(".button2").onclick = count;

    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    };

    //change font color to red
    document.querySelector("#red").onclick = function() {
        document.querySelector('#color').style.color = "red"
    }

    //change font color to blue
    document.querySelector("#blue").onclick = function() {
        document.querySelector('#color').style.color = "blue"
    }

    //change font color to green
    document.querySelector("#green").onclick = function() {
        document.querySelector('#color').style.color = "green"
    }

});
    