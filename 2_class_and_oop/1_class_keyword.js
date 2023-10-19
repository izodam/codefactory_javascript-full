/**
 * Class Keyword
 * 
 * 정의 : 
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스를)
 * 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀
 *  -> 정보를 일반화해서 정리하는 방법
 * 
 * 클래스 이름은 항상 대문자로 시작한다.
 */

class IdolModel{
    // var이나 let 키워드를 적을 필요 없이 변수명만 넣어주면 된다.
    name;
    year;

    // constructor - 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    // function이라는 단어 안씀
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

// class IdolModel{
//     // property을 따로 정의 안해도 됌
//     // constructor 안에 this를 이용해서 정의하긴 해야함
//     // 정의해주는 것이 소통면에서는 좋음 

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

/**
 * 클래스는 함수
 * 클래스로 생성한 인스턴스는 object(객체)
 */

console.log(typeof IdolModel);
console.log(typeof yuJin);