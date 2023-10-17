/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

console.log(name);  //undifined
var name = '코드팩토리';
console.log(name);

/**
 * 위 코드 실행:
 * 
 * var name;
 * console.log(name);
 * name = '코드팩토리';
 * console.log(name);
 */

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

/**
 * let과 const도 hoisting이 됨
 */

console.log(yuJin);
const yuJin = '안유진';

/**
 * var은 안쓰는 이유:
 * let과 const는 변수 선언 전에 값을 미리 가져오는 버그를 방지할 수 있음
 */