function getUpdate(product, price, isIncres) {
    let inputNumber = document.getElementById(product + '-number');
    let productQnty = inputNumber.value;
    if (isIncres == true) {
        productQnty = parseInt(productQnty) + 1;
    } else if (productQnty > 0) {
        productQnty = parseInt(productQnty) - 1;
    }
    inputNumber.value = productQnty;

    let totalProductPrice = document.getElementById(product + '-price');
    totalProductPrice.innerText = productQnty * price;
    totalUpdate();
}
function getInput(product) {
    let inputNumber = document.getElementById(product + '-number');
    let productQnty = parseInt(inputNumber.value);
    return productQnty;
}
function totalUpdate() {

    let phoneTotal = getInput('phone') * 1214;
    let caseTotal = getInput('case') * 57;
    let subTotal = phoneTotal + caseTotal;
    let tax = subTotal / 10;
    let totalprice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalprice;
}
document.getElementById('p-plus').addEventListener('click', function () {
    getUpdate('phone', 1214, true);
})
document.getElementById('p-minus').addEventListener('click', function () {
    getUpdate('phone', 1214, false);
})
document.getElementById('c-plus').addEventListener('click', function () {
    getUpdate('case', 59, true);
})
document.getElementById('c-minus').addEventListener('click', function () {
    getUpdate('case', 59, false);
})


// function getRemove(){

// }