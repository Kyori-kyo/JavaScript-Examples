let counter = 0;

//hello / goodbye
function hello () {

    if (document.querySelector('h1').innerHTML === 'Hello') {
        document.querySelector('h1').innerHTML = "Goodbye";
    } else {
        document.querySelector('h1').innerHTML = "Hello";
    }
        
};

//counter
function count() {
    
    counter++;
    document.querySelector('.start').innerHTML = counter;

    if (counter % 10 === 0)
    alert(`Count is now ${counter}!`)

};

//play the script after the DOM's download
document.addEventListener('DOMContentLoaded', () => {

    //counter
    document.querySelector(".button2").onclick = count;

    //name form
    document.querySelector('form').onsubmit = () => {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    };

    //color buttons
    document.querySelectorAll(".colorbutton").forEach(button => {
        button.onclick = function() {
            document.querySelector('#color').style.color = button.dataset.color;
        }

    });

});