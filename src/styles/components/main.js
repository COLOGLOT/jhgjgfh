
$inputs = $('input');

var interval = setInterval(int, 16000);
function int() {
    $next = $inputs.filter(":checked").next('input');
    if ($next.length) $next.prop('checked', true);
    else $inputs.first().prop('checked', true);
}
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
document.querySelector('#a1').addEventListener('click', () => {
    if(one.classList.contains('block-one')){
        one.classList.remove('block-one');
        clearInterval(interval);
    }
    else{
        interval = setInterval(int, 16000);
        one.classList.add('block-one');
    }
})
document.querySelector('#a2').addEventListener('click', () => {
    if(two.classList.contains('block-two')){
        two.classList.remove('block-two');
        clearInterval(interval);
    }
    else{
        two.classList.add('block-two');
        interval = setInterval(int, 16000);
    }
})
document.querySelector('#a3').addEventListener('click', () => {
    if(three.classList.contains('block-three')){
        three.classList.remove('block-three');
        clearInterval(interval);
    }
    else{
        three.classList.add('block-three');
        interval = setInterval(int, 16000);
    }
})
document.querySelector('#a4').addEventListener('click', () => {
    if(four.classList.contains('block-four')){
        four.classList.remove('block-four');
        clearInterval(interval);
    }
    else{
        four.classList.add('block-four');
        interval = setInterval(int, 16000);
    }
})
document.querySelector('#btn-one').addEventListener('click', () =>{
    alert('Вы успешно забронировали фильм: Новые папины дочки!');
})
document.querySelector('#btn-two').addEventListener('click', () =>{
    alert('Вы успешно забронировали фильм: Три богатыря и пуп земли!');
})
document.querySelector('#btn-three').addEventListener('click', () =>{
    alert('Вы успешно забронировали фильм: Зло!');
})
document.querySelector('#btn-four').addEventListener('click', () =>{
    alert('Вы успешно забронировали фильм: Шифр!');
})
var lt = 0;
var rt = 0;
var nav = document.getElementById('nav');
document.querySelector('#left').addEventListener('click', () =>{
    if(lt == 0){
        nav.style.cssText = 'margin-left: -140%';
        lt = 3;
        rt = 0;
    }
    else if(lt == 3){
        nav.style.cssText = 'margin-left: -80%';
        lt--;
        rt = 1;
    }
    else if(lt == 2){
        nav.style.cssText = 'margin-left: -40%';
        lt--;
        rt = 2;
    }
    else {
        nav.style.cssText = 'margin-left: 0';
        lt--;
        rt = 3;
    }
})
document.querySelector('#right').addEventListener('click', () =>{
    if(rt == 0){
        nav.style.cssText = 'margin-left: 0';
        rt = 3;
        lt = 0;
    }
    else if(rt == 1){
        nav.style.cssText = 'margin-left: -140%';
        rt--;
        lt = 3;
    }
    else if(rt == 2){
        nav.style.cssText = 'margin-left: -80%';
        rt--;
        lt = 2;
    }
    else {
        nav.style.cssText = 'margin-left: -40%';
        rt--;
        lt = 1;
    }
})