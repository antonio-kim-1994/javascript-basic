function test(x :number | string){
    if (typeof x === 'string'){
        return x + '1'
    } else {
        return x + 1
    }
} // 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Type Narrowing 해줘야 조작가능

function arraySample (x :number|string){
    let array :number[] = [];
    if (typeof x === 'number') {
        array[0] = x;
    } else { return }
}

function assertionSample (x :number|string){
    let array :number[] = [];
    array[0] = x as number; // assertion
}

/**
 * assertion : Type Narrowing 할 때 사용, 어떤 타입이 들어올지 100% 확신할 때 사용, 크게 사용할 일이 없다.
 * assertion을 자주사용하지 않는다. Debugging이 어려움. 단순 type shield 해제용으로 사용.
 * as 는 실제 타입을 변환시키지 않는다.
 * assertion 사용 시기
 * 1. 타입 에러의 원인을 모를 때 임시 에러해결용
 * 2. 어떤 타입이 들어올지 100% 확신할 때
 */