var LOWER, RESULT, LENGTH, REGEX, QUANTITY;

QUANTITY=1;

var say=document.querySelector('#say');
var read=document.querySelector('#read');
var all=document.querySelector('#all');
var abc = document.querySelector('#abc');
var ABC = document.querySelector('#ABC');
var NUM = document.querySelector('#NUM');
var SYM = document.querySelector('#SYM');

const handleRCS = () => {
NUM.disabled=false;
SYM.disabled=false;
if (all.checked){
    abc.checked=true;
    ABC.checked=true;
    NUM.checked=true;
    SYM.checked=true;
}
if (say.checked){
    abc.checked=true;
    ABC.checked=true;
    NUM.disabled=true;
    SYM.disabled=true;
}
if (read.checked){
    abc.checked=true;
    ABC.checked=true;
    NUM.checked=false;
    SYM.checked=false;
}
}


$('[data-toggle="tooltip"]').tooltip();
$('[data2-toggle="tooltip"]').tooltip();


var weak = []
for (i = 6; i < 16; i++) { weak.push(i) }
weak.map(i => {
    const r = document.createElement('option');
    r.setAttribute('value', i)
    r.appendChild(document.createTextNode(i))
    document.querySelector('#weak').appendChild(r)
})

var strong = []
for (i = 16; i < 101; i++) { strong.push(i) }
strong.map(i => {
    const r = document.createElement('option');
    r.setAttribute('value', i)
    r.appendChild(document.createTextNode(i))
    document.querySelector('#strong').appendChild(r)
})

var quantity = []
for (i=1;i<=20;i++){quantity.push(i)}
quantity.map(i => {
    const r=document.createElement('option');
    r.setAttribute('value',i)
    r.appendChild(document.createTextNode(i))
    document.querySelector('#quantity').appendChild(r) 
})

document.querySelector('#select').value=12;

const Result = () => {
    $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'CLICK TO COPY');
    LENGTH = document.querySelector('#select').value;
    LOWER = 'abcdefghijklmnopqrstuvwxyz';
    UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    NUMBER = '0123456789';
    SYMBOL = '@#$%&_*){:';
    REGEX = '';
    if (abc.checked) { REGEX += LOWER }
    if (ABC.checked) { REGEX += UPPER }
    if (NUM.checked) { REGEX += NUMBER }
    if (SYM.checked) { REGEX += SYMBOL }
    RESULT = '';
    for (let i = 0; i < LENGTH; i++) {
        RESULT += REGEX[Math.floor(Math.random() * REGEX.length)]
    }
    var VALUE=document.querySelector('.form-control');
    if (VALUE.value!==undefined){return VALUE.value = RESULT}
}

Result()

const handleQuantity = () => {QUANTITY=document.querySelector('#quantity').value;}

const handleGenerate = () => {
    var GEN = []
    for (i = 0; i < QUANTITY; i++) { GEN.push(Result()) }
    document.querySelector('textarea').value = GEN.toString().replace(/,/g, '\n')
}

const handleChange = () => {
    LENGTH = document.querySelector('#select').value;
    document.querySelector('#range').value=LENGTH;
    $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'CLICK TO COPY');
    handleGenerate()
}

const handleRange = () =>{
    const RANGE=document.querySelector('#range').value;
    document.querySelector('#select').value=RANGE;
    handleGenerate()
}

const handleCopy = () => {
    if (document.querySelector('.form-control').value !== '') {
        document.querySelector('.form-control').select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        $('[data-toggle="tooltip"]').tooltip('hide').attr('data-original-title', 'COPIED').tooltip('show');
    }
}