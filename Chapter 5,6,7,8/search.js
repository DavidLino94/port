const form = document.forms[0];
const form = document.getElementsByTagname('form')[0];
const form = document.forms['search'];
const [input,button] = form.elements;
const input = form['searchInput']
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
alert(' Form Submitted');
}