const input = require('sync-input');

const usdCurrRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const introduceYourself = () => {
    console.log("Welcome to Currency Converter!");
    Object.entries(usdCurrRates).forEach(([k, v], _) => {
        console.log(`1 USD equals  ${v} ${k}`);
    });
    console.log(`What do you want to convert?`);
} // introduceYourself()

const getCurrencies = () => {
    let src = input("From: ").toUpperCase();
    if (!(src in usdCurrRates)) {
        console.log("Unknown currency");
        return []
    }
    let dest = input("To: ").toUpperCase();
    if (!(dest in usdCurrRates)) {
        console.log("Unknown currency");
        return []
    }
    return [src, dest];
} // getCurrencies()

const getAmount = () => {
    const amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return 0;
    }
    if (amount < 1) {
        console.log("The amount can not be less than 1");
        return 0;
    }
    return amount;
} // getAmount()

const convert = () => {
    let [curr1, curr2] = getCurrencies();
    if (!(curr1 && curr2))
        return;
    const amountCurr1 = getAmount();
    if (!amountCurr1)
        return;
    const amountUSD = curr1 === 'USD' ? amountCurr1 : amountCurr1 / usdCurrRates[curr1];
    const amountCurr2 = curr2 === 'USD' ? amountUSD : amountUSD * usdCurrRates[curr2];
    console.log(`Result: ${amountCurr1} ${curr1} equals ${amountCurr2.toFixed(4)} ${curr2}`);
} // const convert = () => {...}

(() => {
    introduceYourself();
    convert();
})();
