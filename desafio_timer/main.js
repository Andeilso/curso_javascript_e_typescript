const timer = () => {
    //Criação de variáveis
    let sec = 0;
    let min = 0;
    let hour = 0;
    let count;
    let init = false;

    //Elementos do HTML
    let pTimer = document.getElementById("timer");

    document.addEventListener('click', (e) => {
        if(e.target.id === 'start'){
            pTimer.style = "color: white;"

            if(!init){
                count = setInterval( () => {
                    sec++
                
                    if(sec == 60){
                        min++
                        sec = 0;
                    }
                
                    if(min == 60){
                        hour++
                        min = 0;
                    }
                
                    pTimer.innerHTML = `${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`;
                }, 1000);
            } else {
                return
            }
        
            return init = true;
        }
        
        if(e.target.id === 'stop'){
            clearInterval(count);
        
            if(init){
                pTimer.style = "color: rgb(51, 170, 91);"
            }
        
            return init = false; 
        }
        
        if(e.target.id === 'reset'){
            clearInterval(count);
        
            sec = 0;
            min = 0;
            hour = 0;
            
            pTimer.style = "color: white;"
            
            pTimer.innerHTML = `${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`;

            return init = false;
        }
    })

    //Funções
    let addZeros = (time) => {
        time = time.toString();

        if(time.length < 2){
            time = "0" + time;
            return time;
        }

        return time;
    };
}

timer();