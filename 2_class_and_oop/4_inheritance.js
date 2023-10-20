/**
 * Inheritance
 * 
 * 상속은 객체들간의 관계를 구축하는 방법
 * 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터
 * 속성과 동작을 상속받을 수 있다
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

/**
 * 상속 받을 때에는 
 * extands 뒤에 상속 받을 클래스 이름 넣어줌
 */

class FemaleIdolModel extends IdolModel{
    dance(){
        return `여자 아이돌이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);
console.log(cf.name);

// console.log(cf.dance()); -> 불가능

/**
 * 상속받은 부모 클래스의 모든 프로퍼티를 자식 클래스는 받을 수 있음
 * 
 * but, 거꾸로는 안됌.
 *  -> 부모가 자식 클래스의 프로퍼티 상속받지 못함
 */

// intanceof : 인스턴스인지 확인함
console.log(yuJin instanceof IdolModel);    // true
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('------------------------');
console.log(jiMin instanceof IdolModel);    // true
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);


console.log('------------------------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);