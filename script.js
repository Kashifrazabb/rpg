var LOWER, RESULT, LENGTH, REGEX;

$('[data-toggle="tooltip"]').tooltip();

var weak = []
for (i = 6; i < 16; i++) { weak.push(i) }
weak.map(i => {
    var r = document.createElement('option');
    r.setAttribute('value', i)
    r.appendChild(document.createTextNode(i))
    document.querySelector('#weak').appendChild(r)
})

var strong = []
for (i = 16; i < 101; i++) { strong.push(i) }
strong.map(i => {
    var r = document.createElement('option');
    r.setAttribute('value', i)
    r.appendChild(document.createTextNode(i))
    document.querySelector('#strong').appendChild(r)
})

document.querySelector('#generate').disabled = true

const handleChange = () => {
    $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'CLICK TO COPY');
    document.querySelector('.form-control').value = ''
    document.querySelector('#generate').disabled = false
    LENGTH = document.querySelector('#select').value;
}

const handleGenerate = () => {
    $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'CLICK TO COPY');
    LOWER = 'abcdefghijklmnopqrstuvwxyz';
    UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    NUMBER = '0123456789';
    SYMBOL = '@#$%&_*';
    var abc = document.querySelector('#abc');
    var ABC = document.querySelector('#ABC');
    var NUM = document.querySelector('#NUM');
    var SYM = document.querySelector('#SYM');
    REGEX = '';
    if (abc.checked) { REGEX += LOWER }
    if (ABC.checked) { REGEX += UPPER }
    if (NUM.checked) { REGEX += NUMBER }
    if (SYM.checked) { REGEX += SYMBOL }
    RESULT = '';
    for (let i = 0; i < LENGTH; i++) {
        RESULT += REGEX[Math.floor(Math.random() * REGEX.length)]
    }
    document.querySelector('.form-control').value = RESULT;
}

const handleHover = () => {
    if (document.querySelector('.form-control').value === '') {
        $('[data-toggle="tooltip"]').tooltip('hide');
    }
}

const handleCopy = () => {
    if (document.querySelector('.form-control').value !== '') {
        document.querySelector('.form-control').select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'COPIED').tooltip('show');
    }
}