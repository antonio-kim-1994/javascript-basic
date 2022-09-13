let first_coffee = 360;

function refill(first_coffee){
    let second_coffee = (first_coffee / 3) * 2;
    let third_coffee = (second_coffee  / 3) * 2;
    let total_coffee = first_coffee + second_coffee + third_coffee;
    console.log(total_coffee);
}

refill(first_coffee);