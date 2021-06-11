var elem = document.querySelector('#box');

elem.animate([
    { transform: 'scale(0.5)' },
    { transform: 'scale(1)' },
    { transform: 'scale(0.5)' }

], {
    duration: 1500,
    iterations: Infinity
})