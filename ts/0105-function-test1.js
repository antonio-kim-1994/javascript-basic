function hello(name) {
    if (name) {
        console.log('안녕하세요 ' + name);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function countNumberlen(x) {
    return x.toString().length;
}
function marriagePossibility(monthlyIncome, realestateProperty, attractionGrade) {
    let totalScore = 0;
    totalScore += monthlyIncome;
    if (realestateProperty) {
        totalScore += 500;
    }
    if (attractionGrade === '상') {
        totalScore += 100;
    }
    if (totalScore >= 600) {
        return "결혼가능";
    }
}
console.log(marriagePossibility(100, true, '상'));
