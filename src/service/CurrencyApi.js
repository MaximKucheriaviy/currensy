var myHeaders = new Headers();
myHeaders.append("apikey", "hQHcOUhgAugUfdACsnejrsXbwh5vWJWt");


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};



export const getCurrency = (base, names) => {
    return fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${names}&base=${base}`, requestOptions)
    .then(response => response.json())
}



const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const getPosionInfo = (lat, long) => {
    const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`;
    return fetch(urlPosition)
    .then(response =>response.json())
    
}

export const convert = (from, to, amount) => {
    return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(response => response.json())
}

export const getAllNames = () => {
   return fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.json())
  
}
    
