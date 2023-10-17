/**
 * Data Types
 * 
 * 여섯개의 Primitive type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * Primitive type : 가장 작은 단위
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *     Function
 *     Array
 *     Object
 */

/**
 * Number 타입
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('---------------');

/**
 * String 타입
 */

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진" //큰 따옴표로 선언 가능
console.log(ive)

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation)

/**
 * Template Literal : ``
 * ``를 사용하면 백슬래시를 사용하지 않고 모든 것을 표현 가능
 *  -> 가장 유용한 방식
 */
const iveWonYoung2 = `아이브 
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

/**
 * 템플릿 리터럴 안에 변수를 넣기 위해서는
 * `${변수명}` 을 사용
 */

const groupName = '아이브';
console.log(groupName+' 안유진');
console.log(`${groupName} 안유진`);
console.log('---------------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값
 * 
 * 직접 undefined로 값을 초기화하는 것은 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('---------------');

/**
 * symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를
 * 호출해서 사용
 */

/**
 * === 는 값이 같은지 확인
 */
const test1 = '1';
const test2 = '2';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
/**
 * 결과 false -> 값 다름! 유일무이한 값!
 */

/**
 * Object 타입
 * 
 * Map과 비슷
 * 키: 벨류의 쌍으로 이루어져있따.
 * key:value
 * 
 * 중괄호로 선언
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의
 *      변수를 선언할지 명시
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고
 *      갑에 의해 타입을 '추론'
 * 
 * JS -> dynamic typing
 */