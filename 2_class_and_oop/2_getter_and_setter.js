/**
 * Getter and Setter
 * 
 * 프라이빗 프로퍼티가 있을 때 가장 많이 사용
 */
class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    /**
     * getter의 역할
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */

    get nameAndYear(){
        return `${this.name}-${this.year}`
    }

    /**
     * setter
     * 바꾸고 싶은 프로퍼티와 이름이 겹치게 사용함
     * 무조건 파라미터 한 개 받아야 함
     */

    set setName(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
// 함수가 아님.
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

/**
 * private 값
 * 
 * 실제로 값은 저장하고 있는데
 * 외부에서 액세스 하지 못하는 값
 * 
 * 정의할 때 # 넣어줌
 */

class IdolModel2{
    #name;
    year

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);