const faxinaEl = document.getElementById('faxina');

const obj = {"fizz": "buzz", "foo": null, "bar": 42};

function faxina (obj) {
    for (var prop in obj) {
        if (obj[prop] == null) {
            delete obj[prop]
        }
    }

    for (var prop in obj) {
        htmlTemp = faxinaEl.innerHTML;
        htmlAdd = `<p class="order">${prop}: ${obj[prop]}</p>`; 
            
        faxinaEl.innerHTML = htmlTemp + htmlAdd;
    }    

    return obj;
}

faxina(obj)
