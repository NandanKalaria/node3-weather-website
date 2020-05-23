const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Fetching Weather Data...'
    messageTwo.textContent = ''

    const location = search.value;

    fetch('http://localhost:3030/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
        }
        else{
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Temperature: ' + data.temperature + 'Celsius'
        }
    })
})
})