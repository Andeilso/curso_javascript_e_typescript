// Construtora começa com Letra Maiuscula
function Calculadora () {
    const visor = document.getElementById('visor');

    const dispararFuncaoClique = (el) => {
        
        if (el.classList.contains('btn')) {
            adicionarAoVisor(el.innerText);
        }

        if(el.classList.contains('apagar')) {
            apagarUltimaEntrada();
        }

        if (el.classList.contains('zerar')) {
            apagarTudo();
        }

        if(el.classList.contains('res')){
            resultado();
        }
    }

    const dispararFuncaoKey = (el) => {
        btnLista = document.getElementsByClassName('btn');

        for (const item of btnLista) {

            if (item.innerText == el) {
                console.log(item.innerHTML);
                console.log(el);
                adicionarAoVisor(el);
                return
            }
        }


        if(el == 'Backspace') {
            apagarUltimaEntrada();
        }

        if (el == 'C') {
            apagarTudo();
        }

        if(el == 'Enter'){
            resultado();
        }
    }

    const adicionarAoVisor = (el) => {
        visor.innerText += el;
    };

    const apagarUltimaEntrada = () => {
        visor.innerHTML = visor.innerHTML.slice(0, -1);
    }

    const apagarTudo = () => {
        visor.innerHTML = '';
    }

    const multiplicacao = (conta) => {
        let multi;
            let res;
            let paraTras;
            let paraFentre;
            let outraOperacao = true;

            for (let i = 1; i < conta.length; i++) {
                if( conta.indexOf('*')-i >= 0 
                && !!(parseInt( conta[conta.indexOf('*')-i] ) || conta[conta.indexOf('+')-i] === '0')
                && outraOperacao ){
                    paraTras = i;
                } else {
                    outraOperacao = false;
                }
            }

            outraOperacao = true;

            for (let i = 1; i < conta.length; i++) {
                if( conta.indexOf('*')+i >= 0 
                && (!!( parseInt( conta[conta.indexOf('+')+i] )) || conta[conta.indexOf('+')+i] === '0')
                && outraOperacao ){
                    paraFentre = i+1;
                } else {
                    outraOperacao = false;
                }
            }

            multi = `${conta.slice((conta.indexOf('*')-paraTras) , conta.indexOf('*'))}*${conta.slice(conta.indexOf('*')+1 , conta.indexOf('*')+paraFentre)}`;
            
            res = conta.slice((conta.indexOf('*')-paraTras) , conta.indexOf('*'))*conta.slice(conta.indexOf('*')+1 , conta.indexOf('*')+paraFentre);

            return conta = conta.replace(multi, res);
    }

    const divisao = (conta) => {
        let multi;
        let res;
        let paraTras;
        let paraFentre;
        let outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('/')-i >= 0 
            && !!(parseInt( conta[conta.indexOf('/')-i] ) || conta[conta.indexOf('+')-i] === '0')
            && outraOperacao ){
                paraTras = i;
            } else {
                outraOperacao = false;
            }
        }

        outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('/')+i >= 0 
            && (!!( parseInt( conta[conta.indexOf('+')+i] )) || conta[conta.indexOf('+')+i] === '0')
            && outraOperacao ){
                paraFentre = i+1;
            } else {
                outraOperacao = false;
            }
        }

        multi = `${conta.slice((conta.indexOf('/')-paraTras) , conta.indexOf('/'))}/${conta.slice(conta.indexOf('/')+1 , conta.indexOf('/')+paraFentre)}`;
        
        res = conta.slice((conta.indexOf('/')-paraTras) , conta.indexOf('/'))/conta.slice(conta.indexOf('/')+1 , conta.indexOf('/')+paraFentre);

        return conta = conta.replace(multi, res);
    }
    
    const soma = (conta) => {
        let multi;
        let res;
        let paraTras;
        let paraFentre;
        let outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('+')-i >= 0 
            && !!(parseInt( conta[conta.indexOf('+')-i] ) || conta[conta.indexOf('+')-i] === '0')
            && outraOperacao ){
                paraTras = i;
            } else {
                outraOperacao = false;
            }
        }

        outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('+')+i >= 0 
            && (!!( parseInt( conta[conta.indexOf('+')+i] )) || conta[conta.indexOf('+')+i] === '0')
            && outraOperacao ){
                paraFentre = i+1;
            } else {
                outraOperacao = false;
            }
        }
        console.log("soma conta", conta);
        multi = `${conta.slice((conta.indexOf('+')-paraTras) , conta.indexOf('+'))}+${conta.slice(conta.indexOf('+')+1 , conta.indexOf('+')+paraFentre)}`;
        console.log("soma multi", multi);
        res = parseInt(conta.slice((conta.indexOf('+')-paraTras) , conta.indexOf('+')))+parseInt(conta.slice(conta.indexOf('+')+1 , conta.indexOf('+')+paraFentre));
        console.log("soma res", res);
        return conta = conta.replace(multi, res);
    }

    const subtracao = (conta) => {
        let multi;
        let res;
        let paraTras;
        let paraFentre;
        let outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('-')-i >= 0 
            && !!(parseInt( conta[conta.indexOf('-')-i] ) || conta[conta.indexOf('+')-i] === 0)
            && outraOperacao ){
                paraTras = i;
            } else {
                outraOperacao = false;
            }
        }

        outraOperacao = true;

        for (let i = 1; i < conta.length; i++) {
            if( conta.indexOf('-')+i >= 0 
            && (!!( parseInt( conta[conta.indexOf('+')+i] )) || conta[conta.indexOf('+')+i] === 0)
            && outraOperacao ){
                paraFentre = i+2;
            } else {
                outraOperacao = false;
            }
        }

        multi = `${conta.slice((conta.indexOf('-')-paraTras) , conta.indexOf('-'))}-${conta.slice(conta.indexOf('-')+1 , conta.indexOf('-')+paraFentre)}`;
        console.log("subtação multi ", multi);
        res = conta.slice((conta.indexOf('-')-paraTras) , conta.indexOf('-'))-conta.slice(conta.indexOf('-')+1 , conta.indexOf('-')+paraFentre);
        console.log("subtação res ", res);
        return conta = conta.replace(multi, res);  
    }

    const funcoesCalc = (conta) => {
        let operador;

        if( conta.indexOf('(') !== -1 && conta.indexOf(')') !== -1 ) {
            let parenteses;
            let res;

            parenteses = conta.slice( conta.indexOf('(') , conta.indexOf(')')+1 );
            res = funcoesCalc( `${ conta.slice( conta.indexOf('(')+1, conta.indexOf(')') )}` )

            conta = conta.replace(parenteses, res);

            if( conta.indexOf('(') > -1){
                conta = funcoesCalc(conta);
            }
        };

        for (let i = 0; i < conta.length; i++) {

            operador = conta[i];

            if( operador === '*' ){
                conta = multiplicacao(conta);
                i = 0;
            }
    
            if( operador === '/' ){
                conta = divisao(conta);
                i = 0;
            }
    
            if( operador === '+' ){
                conta = soma(conta);
                i = 0;
            }
    
            if( operador === '-' ){
                conta = subtracao(conta);
                i = 0;
            }
        }

        if(conta === NaN || conta === false || conta === undefined){
            alert("Conta inválida");
            return visor.innerText = '';
        }
        
        return conta
    }

    const resultado = () => {
        visor.innerText = funcoesCalc('484/22*22/22+38-65+(55+945+20)');
    }
    
    this.iniciar = () => {

        document.addEventListener('click', (e) => {
            dispararFuncaoClique(e.target);
        });

        document.addEventListener('keydown', (e) => {
            dispararFuncaoKey(e.key);
        });
    };

}

let cal = new Calculadora();

cal.iniciar();