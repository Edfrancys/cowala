const classificadorEl = document.getElementById('classificador')

const arr = [
    {
        souEu: false,
        responsavel: true,
        nome: 'Francisco Azevedo'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'João Paulo'
    },
    {
        souEu: true,
        responsavel: true,
        nome: 'Edfrancys Azevedo'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Ewerton Silva'
    },
    {
        souEu: false,
        responsavel: true,
        nome: 'João Pedro'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Alberto Pedro'
    }
];

function classificador (arr) {
    let ord = arr.sort((a, b) => {
        if (a.souEu > b.souEu) return -1;
        if (a.souEu < b.souEu) return 1;
        if (a.responsavel > b.responsavel) return -1;
        if (a.responsavel < b.responsavel) return 1;
        if(a.nome > b.nome) return 1;
        if(a.nome < b.nome) return -1;
        return 0;
    });

    ord.forEach((element, index) => {
        htmlTemp = classificadorEl.innerHTML;
        htmlAdd = `<p class="order"> #id:${index + 1} - Nome: ${element.nome}<br/> - Sou eu: ${element.souEu} - Responsável: ${element.responsavel} </p>`; 
            
        classificadorEl.innerHTML = htmlTemp + htmlAdd;
    })
   
}

classificador(arr);