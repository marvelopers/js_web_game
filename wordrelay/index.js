const bnt = document.querySelector("#button");
bnt.addEventListener('click', () => {
    const word = document.querySelector('#word').textContent;
    const input = document.querySelector('#input').value;

    const lastIndex = word.length - 1;
    const i = input[0];
    const w = word[lastIndex];

    const wordContect = document.querySelector('#word');
    if (i === w) {
        wordContect.textContent = input;
        document.querySelector('#error').textContent = '';
        document.querySelector('#input').value = '';
        document.querySelector('#input').focus();

    } else {
        wordContect.textContent = '땡!';
        document.querySelector('#input').value = ''

    }
})
