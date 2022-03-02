//hello => goodbye
function hello () {

    if (document.querySelector('h1').innerHTML === 'Hello') {
        document.querySelector('h1').innerHTML = "Goodbye";
    } else {
        document.querySelector('h1').innerHTML = "Hello";
    }
        
};

//counter
let counter = 0;

function count() {
    
    counter++;
    document.querySelector('.start').innerHTML = counter;

    if (counter % 10 === 0)
    alert(`Count is now ${counter}!`)

};

//play the script after the DOM's download
document.addEventListener('DOMContentLoaded', function() {

    //counter
    document.querySelector(".button2").onclick = count;

    //color buttons
    document.querySelectorAll(".colorbutton").forEach(button => {
        button.onclick = () => {
            document.querySelector('#color').style.color = button.dataset.color;
        }

    });

    //color dropdown
    document.querySelector("select").onchange = function () {
        document.querySelector('#color').style.color = this.value;
    }

    //name form
    document.querySelector('#submit').disabled = true;

    document.querySelector('#name').onkeyup = () => { 
        document.querySelector('#submit').disabled = false
    }

    document.querySelector('.form4').onsubmit = () => {
    const name = document.querySelector('#name').value;
    alert(`Hello, ${name}!`);
    };





    
    //tasks
    document.querySelector('#submit2').disabled = true;

    document.querySelector('#task').onkeyup = () => { 
        document.querySelector('#submit2').disabled = false
    }

    document.querySelector('.form5').onsubmit = () => {
        const task = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = task;
            
        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        

        return false
    }

});