function doSomething(){
    console.log('Something Happened!');
}
addEventListener('click', doSomething);

function doSomething(event){
    console.log(event.type);
}

function doSomething(event){
    console.log(event.target);
}

function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!') );

addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});

addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

addEventListener('touchend', () => console.log('Touch stopped');

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

liElement.addEventListener('click', (event) => {
console.log('clicked on li');
event.stopPropagation(); }, false); 
