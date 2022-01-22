const obj = {"fizz": "buzz", "foo": null, "bar": 42};

function faxina (obj) {
    for (var prop in obj) {
        if (obj[prop] == null) {
            delete obj[prop]
        }
    }
    return obj;
}

console.log(obj);

faxina(obj)

console.log(obj);