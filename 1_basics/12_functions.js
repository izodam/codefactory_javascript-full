/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 * 
 * DRY를 지키는게 좋은 코드
 */
function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();

/**
 * function 두번 정의하면 덮어씌워짐
 * var 키워드와 같다라고 생각하면 됨
 */

// 파라미터 사용
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);

/**
 * 함수에서 입력받는 값에 대한 정의를 parameter
 * 
 *  실제 입력하는 값은 argument
 * 
 * 위 예제에서는 number = parameter
 *                   4 = argumet
 */

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

/**
 * default 값 정해주기
 * 
 * defalt값 정해준 파라미터는 값을 안넣어도 된다.
 */

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

/**
 * 반환 받기
 * return 받기
 */
console.log('-------------');
function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arror 함수
 */
const multiply2 = (x, y) => {
    return x * y
}
console.log(multiply2(3,4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4,5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x * y * z;
}

console.log('------------------');
console.log(multiplyThree(4, 5, 6));

// 무한하게 파라미터 받기
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));


/**
 * immediately invoked function
 * 
 * 정의 동시에 실행
 */
(function(x, y){
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object);