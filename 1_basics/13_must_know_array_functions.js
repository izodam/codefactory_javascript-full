/**
 * Array Methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

/**
 * push()
 * 
 * array 맨 끝에 아이템 추가
 * return 값 존재함 -> 추가한 후 길이 반환
 */

console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);
console.log('---------------------')

/**
 * pop()
 * 
 * 마지막 element를 반환받고 삭제
 */

console.log(iveMembers.pop());
console.log(iveMembers);

/**
 * shift()
 * 
 * 첫번째 값 반환받고 삭제
 */
console.log(iveMembers.shift());
console.log(iveMembers);

/**
 * unshift()
 * 
 * shift의 반대
 * push와 같지만 첫번째에 값 추가
 */
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('---------------------')

/**
 * splice()
 * 
 * 첫번째 : 어떤 index 삭제
 * 두번째 : 몇개를 삭제하고 싶은지
 */

console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

/**
 * concat()
 * 
 * push와 같은 역할을 하는 것처럼 보임
 * but, 새로운 array를 만들어서 반환
 * 다른 메모리 공간에 저장된 값 반환
 */
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

/**
 * slice()
 * 
 * splice의 원래 array가 변경되지 않는 버전
 * 
 * 두번째 파라미터에 몇번 인덱스까지 삭제할 것인지 넣는 것.
 * 해당 인덱스는 제외하고 삭제됨.
 */
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

/**
 * spread operator
 * 
 * 펼쳐서 넣음
 */
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('---------------------');
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log(iveMembers2 === iveMembers);

/**
 * join()
 * 
 * 컴마 기준으로 스트링으로 반환
 * 괄호 안에 나눔의 기준이 되는 문자를 넣을 수 있음
*/
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

/**
 * sort()
 * 
 * 정렬
 */
// 오름차순
iveMembers.sort();
console.log(iveMembers);

// 내림차순
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
// array에 있는 모든 값을 순회하면서 각각의 값들을 변형
// 원래 array 변경 X. 새로운 array 반환
console.log('-------------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter()
// true를 반환하면 해당 값 keep
// false를 반환하면 keep하지 않음
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));

console.log(numbers.filter((x) => x % 2 === 0));

// find()
// 해당하는 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

/**
 * reduce()
 * 
 * 파라미터 안 argument 두 개 넣음
 * 두번째 파라미터는 시작하고 싶은 값
 * 첫번째는 콜백함수
 */


console.log(numbers.reduce((p, n) => p + n, 0));


/**
 * reduce
 * 
 * numbers = [1, 8, 7, 6, 3];
 * numbers.reduce((p, n) => p + n, 0);
 * 
 * 1) 초기값인 0이 p에 입력
 * 2) numbers 리스트의 첫번째 값인 1이 n에 입력
 * 3) p+n 즉, 0+1의 결과값인 1이 반환
 * 4) 3에서 반환한 값 1이 p에 입력
 * 5) 리스트의 두번째 값인 8이 n에 입력
 * 6) p+n 즉, 1+8의 결과값인 9가 반환
 * 7) 6에서 반환한 값 9가 p에 입력
 * ...
 * numbers 리스트의 모든 값들을 다 순회할 때까지 반복
 */