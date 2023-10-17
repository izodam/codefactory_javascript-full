/**
 * operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('------------------')

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('------------------')

/**
 * 연산자의 위치
 * 
 * ++/--를 뒤에다 작성하면 다른 오퍼레이터가 먼저 실행
 * 후에 증가 혹은 감소
 * 
 * 현실에서는 ++/--를 앞에 두는 일은 거의 없음
 * 코드를 쉽게 읽게 하기 위해서
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 * 
 * '숫자'에 +를 붙였을 때 number 타입으로 변함
 *      -> 원래 값이 변하진 않음
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

/**
 * true의 숫자 값은 1
 * false의 숫자 값은 0
 */
sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);     // -99 출력

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 -> 사실상 필요 없음
 * 2) 값과 타입의 비교   
 */
console.log(5 == 5);
console.log(5 == '5');  // true
console.log(0 == '');   // true
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');     // false
console.log(0 === '');   
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('------------------')

console.log(5 != 5);
console.log(5 != '5'); 
console.log(0 != '');   
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('------------------')

console.log(5 !== 5);
console.log(5 !== '5'); 
console.log(0 !== '');   
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('------------------')

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 * 조건 ? True일 때 실행 될 것 : False일 때 실행 될 것
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다');
console.log('------------------')

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('------------------')

// ||는 하나만 true여도 ture를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('------------------')

// 활용
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('------------------')

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

/**
 * ?? : 좌측값이 null이거나 undefined일 때 오른쪽 값을 반환해라.
 */
name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';    // 바뀌지 않음
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);