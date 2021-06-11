var elem = document.querySelector('#box');

elem.animate([
    { transform: 'translate(0,0)', background: 'darkcyan' },
    { transform: 'translate(400px,0)', background: 'red' },
    { transform: 'translate(400px,400px)', background: 'blue' },
    { transform: 'translate(0,400px)', background: 'green' },
    { transform: 'translate(0,0)', background: 'darkcyan' }
], {
    duration: 1500,
    iterations: Infinity
})