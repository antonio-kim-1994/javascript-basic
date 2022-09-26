let deposit = 40000;
let future_deposit = 0;

function interest (deposit) {
    if (deposit < 50000) {
        future_deposit = deposit * 1.15 * 1.15;
    } else {
        future_deposit = deposit * 1.2 * 1.15;
    }
}

interest(deposit)
console.log(future_deposit);