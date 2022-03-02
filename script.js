//hello => goodbye
function hello () {

    if (document.querySelector('h1').innerHTML === 'Hello') {
        document.querySelector('h1').innerHTML = "Goodbye";
    } else {
        document.querySelector('h1').innerHTML = "Hello";
    }
        
};

//counter
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {    
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('.start').innerHTML = counter;
    localStorage.setItem('counter', counter);

    //if (counter % 10 === 0)
    //alert(`Count is now ${counter}!`)

};

//play the script after the DOM's download
document.addEventListener('DOMContentLoaded', function() {

    //counter
    document.querySelector(".start").innerHTML = localStorage.getItem('counter');
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
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit2').disabled = false
        } else {
            document.querySelector('#submit2').disabled = true
        }
            
    }

    document.querySelector('.form5').onsubmit = () => {
        const task = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = task;
            
        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        document.querySelector('#submit2').disabled = true;
        
        return false
    }

    //currency JSON
    document.querySelector('#form5').onsubmit = function () {

        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=ceab2abb04afb4f4c93203a86419ef5d')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];

            if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${currency}.`;
            } else {
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }
        })
        .catch(error => {
            
        })

        return false;

    }

});