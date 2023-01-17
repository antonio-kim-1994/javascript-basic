function testCase(x :number) :number {
    return x * 2
}

function fixedPlus(x :number) :void {
    1 + 1
}

// x? : 함수 호출 시 아규먼트가 없어도 허용
// number | undefined 와 같다.
function questionMark (x? :number) :void { 

}

function narrowing (x :number | string) :void {
    
}