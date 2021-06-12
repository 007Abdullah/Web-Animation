var Cloudelem = document.getElementById('cloud-div');


var animatedElement = Cloudelem.animate([
    { transform: 'translate(1200,0)' },
    { transform: 'translate(-1400px,0)' },
], {
    duration: 3000,
    iterations: Infinity
})


var PlanEle = document.getElementById('plane-div');

var PlanElement = PlanEle.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,0)' },
], {
    duration: 3000,
    iterations: Infinity
})