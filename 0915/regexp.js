/\S/.test('ㅋㅋㅋㅋㅋ');  // \S 모든문자 1개 글자 검사
/^a/.test('abcd'); // a로 시작하는 문자 검사
/a|b/.test('abcd'); // a 또는 b 로 시작하는 문자 검사

// 이메일 검사
/\S+@\S+\.\S+/.test('aaa@bbb.ccc')