let visor = document.getElementById('visor');
let conta = [];

const digitarNoVisor = (target) => {
    switch (target) {
        case 'c':
            visor.innerText = '';
            conta = [];
            break
        case '(':
            visor.innerText += '(';
            conta.push('(');
            break
        case ')':
            visor.innerText += ')';
            conta.push(')');
            break
        case '/':
            visor.innerText += '/';
            conta.push('/');
            break
        case '7':
            visor.innerText += '7';
            conta.push('7');
            break
        case '8':
            visor.innerText += '8';
            conta.push('8');
            break
        case '9':
            visor.innerText += '9';
            conta.push('9');
            break
        case '*':
            visor.innerText += '*';
            conta.push('*');
            break
        case '4':
            visor.innerText += '4';
            conta.push('4');
            break
        case '5':
            visor.innerText += '5';
            conta.push('5');
            break
        case '6':
            visor.innerText += '6';
            conta.push('6');
            break
        case '+':
            visor.innerText += '+';
            conta.push('+');
            break
        case '1':
            visor.innerText += '1';
            conta.push('1');
            break
        case '2':
            visor.innerText += '2';
            conta.push('2');
            break
        case '3':
            visor.innerText += '3';
            conta.push('3');
            break
        case '-':
            visor.innerText += '-';
            conta.push('-');
            break
        case '.':
            visor.innerText += '.';
            conta.push('.');
            break
        case ',':
            visor.innerText += '.';
            conta.push('.');
            break
        case '0':
            visor.innerText += '0';
            conta.push('0');
            break
        case '<<':
            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1);
            conta.pop();
            break
        case 'Backspace':
            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1);
            conta.pop();
            break
        case '=':
            visor.innerText = calcular(conta);
            if (visor.innerText == 'undefined') {
                visor.innerText ='ERROR +/';
            }
            conta = [];
            break
        case 'Enter':
            visor.innerText = calcular(conta);
            if (visor.innerText == 'undefined') {
                visor.innerText ='ERROR +/';
            }
            conta = [];
            break
        default:
            break
    }
}

const transformarParaCalcular = (conta) => {
    let arrayNumParaConta = [];
    let operadores = null;
    let num = 0;

    conta.forEach( (el, i) => {
        operadores = el === '+' || el === '-' || el === '/' || el === '*' ? true : false;
        
        if(!operadores) {
            num = num === 0? el :`${num}${el}`;
        } else {
            num !== 0 ? arrayNumParaConta.push(parseInt(num)) : '';
            num = 0;
            arrayNumParaConta.push(el);
            operadores = null;
        }

        if (conta.length-1 === i) {
            arrayNumParaConta.push(parseInt(num));
        }
    });

    return arrayNumParaConta
}

const calcular = (conta) => {
    let arrayConta = transformarParaCalcular(conta);
    let total;
    let num = 0;
    let operador = null;

    arrayConta.forEach( (el, i) => {
        if(operador && operador != el){
            switch (operador) {
                case '/':
                    operador = null
                    num = (num/el);
                    break;
                case '*':
                    if(num*el){
                        operador = null
                        num = (num*el);
                    }
                    break;
                case '-':
                    operador = null
                    num = (num-el);
                    break;
                case '+':
                    operador = null
                    num = (num+el);
                    break;
                case '**':
                    if(parseInt(el)){
                        operador = null
                        num = (num**el);
                    }
                    break
                default:
                    alert('Conta Inválida!')
                    return total = 0;
                    break;
            }
        }
        
        operador = el === '/' || el === '+' || el === '-' || el === '*' ? (!operador? el : (operador+el)) : null;

        !operador && num === 0? num = el : '';

        arrayConta.length-1 === i? total = num: '';
    });
    
    return total
}

document.addEventListener('click', (e) => {
    digitarNoVisor(e.target.innerText);
})

document.addEventListener( 'keydown' , (e) => {
    digitarNoVisor(e.key)
})

