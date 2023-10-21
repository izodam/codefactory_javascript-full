/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yuJin);

/**
 * Extensible
 * 
 * 확장 가능한지 여부 확인
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';    // true이기 때문에 값이 잘 추가됨.
console.log(yuJin);

// false로 바꿔주기
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin);     // 에러를 던지진 않음

// 삭제는 가능
delete yuJin['position'];
console.log(yuJin);


/**
 * Seal (봉인)
 * 기본값 false
 * 
 * configurable을 false로 만드는 것과 효과가 같다!
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

// 값 추가 불가능
yuJin2['groupName'] = '아이브';
console.log(yuJin2);     

// 삭제도 불가능
delete yuJin2['name'];
console.log(yuJin2);

// Property Attribute 변경 가능
Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

// 값 추가 불가능
yuJin3['groupName'] = '아이브';
console.log(yuJin3);     

// 삭제도 불가능
delete yuJin3['name'];
console.log(yuJin3);

// Property Attribute도 변경 불가능
// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리'
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
// 상위 오브젝트를 freeze했다고 안에 들어있는 하위 오브젝트까지 전부 freeze되는 것이 아님
console.log(Object.isFrozen(yuJin4['wonYoung']));