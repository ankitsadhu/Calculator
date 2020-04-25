var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('calc-zero');

var decimal = document.getElementById('calc-decimal');
var clear = document.getElementById('calc-clear');
var backspace = document.getElementById('neglect');
var displayElement = document.getElementById('calc-display-val');

var display =0;
var pendingVal;
var evalStringArr =[];

var calNumBtns = document.getElementsByClassName('calc-btn-num');
var calOperatorBtn = document.getElementsByClassName('calc-btn-operator');


var updateDisplayVal = (clickObj)=> {
    var btnText = clickObj.target.innerText;
    if(display === '0')
        display = '';
    
    display += btnText;
    displayElement.innerHTML = display;
}


var performOperation = (clickObj)=> {
    var operator = clickObj.target.innerHTML;

    switch(operator){
        
        case '+':
            pendingVal = display;
            display = '0';
            displayElement.innerText = display;
            evalStringArr.push(pendingVal);
            //evalStringArr.push('+');
            break;

        case '-':
                pendingVal = display;
                display ='0';
                displayElement.innerText = display;
                evalStringArr.push(pendingVal);
                //evalStringArr.push('-');
                break;

         case 'x':
                    pendingVal = display;
                    display ='0';
                    displayElement.innerText = display;
                    evalStringArr.push(pendingVal);
                    //evalStringArr.push('*');
                    break;

        case '/':   
                    pendingVal = display;
                    display ='0';
                    displayElement.innerText = display;
                    evalStringArr.push(pendingVal);
                    evalStringArr.push('/');
                    break;

        case '=':
                    display = display.slice(0,display.length -1);
                    evalStringArr.push(display);
                    var evaluation = eval(evalStringArr.join(''));
                    display = evaluation + '';
                    displayElement.innerText = display;
                    evalStringArr = [];
                    break;             
                   
                    default:
                    break;
        
    }
}
for(let i =0;i<calNumBtns.length; i++){
    calNumBtns[i].addEventListener('click',updateDisplayVal,false);
}

for(let i =0;i<calOperatorBtn.length; i++){
   calOperatorBtn[i].addEventListener('click',performOperation,false);
}

clear.onclick = () =>{
    display = '0';
    pendingVal = undefined;
    evalStringArr = [];
    displayElement.innerHTML = display;
}

backspace.onclick = () =>{
    display = display.slice(0,display.length -4);
    if(display === '0' || display === '+/-'  || display === '+/')
     display ='0';
    displayElement.innerHTML = display;
}

decimal.onclick = () => {
    if(!display.includes('.'))
        display += '.';
    displayElement.innerText = display;
    
}

