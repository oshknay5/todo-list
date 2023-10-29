 
//  печать заголовка

let heading ="СПИСОК ПОКУПОК";
let i=0;
let speed=100;
function type(){
    if (i< heading.length){
 document.querySelector('#heading').textContent += heading.charAt(i);
 i++;
     setTimeout(type,speed);
    }
}
type();
//  список покупок

const field = document.querySelector ('#inputField');
const btn = document.querySelector ('#btn');
const buy = document.querySelector ('#buy');
const cost = document.querySelector ('#cost');

function workEnter(){

    if (field.value.length === 0) {
        return false;
    }
    else{
        const list = document.createElement ('li'); 
        buy.appendChild (list);
        const price = document.createElement ('input'); 
        cost.appendChild (price);
        price.placeholder = 'цена';

        list.innerText = field.value; 

        list.classList.add ('list');
        field.value = "";
        price.classList.add ('price');

        list.addEventListener ('click', function(){
        list.classList.toggle ('crossText');   
    })    
        list.addEventListener ('dblclick', function(){
        buy.removeChild (list);
        cost.removeChild (price);
    })    
}}

const btnSum = document.querySelector ('#btnSum');
const par = document.querySelector ('#par');

btnSum.addEventListener ('click', function(){

    const priceValue = document.querySelectorAll('.price');
    const money = document.querySelector('#money');
    let sum = 0;
   
    for (let i = 0; i < priceValue.length; i++) {
		sum += +priceValue[i].value; 
	}
    sum = sum.toFixed (2);
    document.querySelector ('#par').textContent = sum;
     money.classList.add('moneyYellow');

    })

        field.addEventListener ('keypress', function (e){
        if (e.key === "Enter") {
        workEnter();
        }
    })
        btn.addEventListener ('click', function(){
        workEnter();
    })

    
   
 
   
    




