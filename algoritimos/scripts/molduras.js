const moldura = document.getElementById('resultado')

function molduras(collum, line) {
    const loopCollum = collum - 1;
    const loopLine = line - 1;
    const collumArr = [];
    const collumIntermedioArr = [];

    for (let index = 0; index <= loopCollum; index++) {
        if (index == 0) collumIntermedioArr[index] = '-';
        else if (index == loopCollum) collumIntermedioArr[index] = '-';
        else collumIntermedioArr[index] = ' ';
    }
    for (let index = 0; index <= loopCollum; index++) {
        if (index == 0) collumArr[index] = '+';
        else if (index == loopCollum) collumArr[index] = '+';
        else collumArr[index] = '-';
    }
      
    for (let index = 0; index <= loopLine; index++) {
        if ( index === 0 || index === loopLine) {
            htmlTemp = moldura.innerHTML;
            htmlAdd = '<span class="linemoldura">' + collumArr.toString().replaceAll(',', ' ') + '</span>';            
            
            moldura.innerHTML = htmlTemp + htmlAdd;

        } else{
            htmlTemp = moldura.innerHTML;
            htmlAdd = '<span class="linemoldura">' + collumIntermedioArr.toString().replaceAll(',', ' ') + '</span>';    
            
            moldura.innerHTML = htmlTemp + htmlAdd;
        } 
    }    

}

molduras(6,4);