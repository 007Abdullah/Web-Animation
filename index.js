var elem = document.querySelector('#box');

elem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,0)' },
    { transform: 'translate(0,0)' },
    { transform: 'translate(600,0)' }
], {
    duration: 1500
})