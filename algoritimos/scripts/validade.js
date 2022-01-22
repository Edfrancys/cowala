function validateData(dataValue, validationValue) {
    
    const data = new Date(dataValue);    
    
    const diaValidate = Number(validationValue.replace('d', ''));    
    data.setDate(data.getDate() + diaValidate);

    const dataValidate = data.getTime();
    const dataAtual = new Date().getTime();

    if (dataValidate >= dataAtual) console.log(true);
    else console.log(false);

}

validateData('2021-11-17T20:40:09.503Z', '10d');
validateData('2021-12-10T00:00:00.000Z', '180d');




