const theButton       = document.createElement('button')
const theClickCounter = document.createElement('div')
const theTitle        = document.querySelector('#app h1')
const theApp          = document.getElementById('app')

let cnt = 0;
theButton.setAttribute('style', 'with: 10em; background: green; color: white; font-size: 3em')
theButton.innerText = "点我"
function titleBigger() {
    let fontSize = theTitle.computedStyleMap().get('font-size');
    fontSizeString = (fontSize.value * 1.1).toString() + fontSize.unit;
    console.log(fontSizeString)
    theTitle.style.fontSize = fontSizeString
    console.dir(theTitle)
    cnt++;
    theClickCounter.innerText = "You clicked: " + cnt.toString() 
}
theButton.addEventListener('click', titleBigger);
theApp.appendChild(theButton);
theApp.appendChild(theClickCounter);
 
