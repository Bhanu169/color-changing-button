// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');
// const button4 = document.getElementById('button4');


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');


button1.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'red';
        button2.style.backgroundColor = 'gray'; 
        button3.style.backgroundColor = 'gray';
        button4.style.backgroundColor = 'gray';
});

button2.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'gray'; 
        button2.style.backgroundColor = 'blue';
        button3.style.backgroundColor = 'gray';
        button4.style.backgroundColor = 'gray';
});

button3.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'gray'; 
        button2.style.backgroundColor = 'gray';
        button3.style.backgroundColor = 'green';
        button4.style.backgroundColor = 'gray';
});

button4.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'gray'; 
        button2.style.backgroundColor = 'gray';
        button3.style.backgroundColor = 'gray';
        button4.style.backgroundColor = 'orange';
});



// button1.addEventListener('click', toggleColors);
// button2.addEventListener('click', toggleColors);
// button3.addEventListener('click', toggleColors);
// button4.addEventListener('click', toggleColors);
