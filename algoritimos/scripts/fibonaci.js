const fibonanciEl = document.getElementById("sequenciaFibonaci");

function sequenciaFibonaci (value) {

    const loop = value - 1;    
    let arr = []

    for (let index = 0; index <= loop; index++) {      

        let ultimoIndice = arr.length - 1;
        
        if (arr.length == 1) {            
            valor = arr[ultimoIndice] + 1;            
        } else if (arr.length > 1) {
           
            let penultimoIndice = ultimoIndice - 1;
            valor = arr[ultimoIndice] + arr[penultimoIndice];            
        }
        else {
            valor = 0;
        }
        
        arr[index] = valor;               
    }
    
    fibonanciEl.innerHTML = '<p>[' + arr.toString().replaceAll(',' , ', ') + ']</p>';    
    
}
