/* ------- 객체 생성 -------- */

/* 1. 객체 리터럴 */
let member = {
    name : '공우정',
    age : 28,
    address : '서울시',
    getName : function() {
        console.log(`이름 : ${this.name}`);
    }
}
member.getName();

/* 2. Object() 생성자 함수 */
let member2 = new Object();
member2.name = '공우정2';
member2.age = 27;
member2.address = '서울시';
member2.getName = function() {
    console.log(`이름 : ${this.name}`);
}
member2.getName();

/* 3. 생성자 함수 */
function Member(name, age, address, getName) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.getName = getName;
}

let member3 = new Member('공우정3', 29, '서울시', function() {console.log(`이름 : ${this.name}`)});
member3.getName();

/* ------- 객체 프로퍼티 접근 -------- */
console.log(member.name);
console.log(member2.name);
console.log(member3.name);

console.log(member['name']);
console.log(member2['name']);
console.log(member3['name']);

/* 객체 프로퍼티 값 초기화 */
member.name = '신기한';
console.log(`이름 : ${member.name}`);

/* 객체 프로퍼티 동적 생성 */
member.tel = '010-222-222';
console.log(`번호 : ${member.tel}`);

member['cellphone'] = '02-222-222';
console.log(`번호 : ${member.cellphone}`);

/* 객체 프로퍼티 삭제 */
delete member.tel;
console.log(`번호 : ${member.tel}`);

/* for문 응용 */
for (let prop in member) {
  console.log(`${prop} : ${member[prop]}`);
}


/* ------ 객체 연습 ------ */

/* 객체 삭제는 delete 키워드로 안된다. */
delete member; 
console.log(member);

/* 이미 생성된 객체를 다른 변수에 할당하면 해당 객체의 프로퍼티도 복사가 된다. */
let member4 = member3;
console.log(member4.name);

/* 원본 객체의 프로퍼티가 값이 바뀌면 복사 대싱인 객체의 프로퍼티의 값도 바뀐다. */
member3.name = '바뀜';
console.log(member4.name);

/* 객체 프로퍼티의 key 값에 ' ' 문자열로 입력을 해도 상관없다 */
let member5 = {
    'name' : 'name'
}

console.dir(member5);

console.log(member5.name);
console.log(member5['name']);

/* 객체 프로퍼티의 배열 할당 */
let member6 = {
    name : ['공', '우정']
}

console.log(member6.name[0]);
console.log(member6.name[1]);

for(let i = 0; i<member6.name.length; i++) {
    console.log(member6.name[i]);
}

/* 객체의 프로퍼티의 객체 할당하기 */
let member7 = {
    obj : {
        name : '공우정'
    }
}

console.log(member7.obj.name);
console.log(member7['obj']['name']);

let member8 = {
    obj : member7
}

console.dir(member8);

/* undefined가 결과로 나온다 */
console.log(member8.obj.name);
console.log(member8['obj']['name']);

/* 정상 출력 */
console.log(member8.obj.obj.name);
console.log(member8['obj']['obj']['name']);

/* 객체 프로퍼티 생성 및 접근 활용 */
let member9 = {
    name_age : '공우정 27'
}

console.log(member9.name_age);

let member10 = {
    //name-age : '공우정 27' ...  에러 이유 key : name-age 는 name 마이너스 age 로 인식을 하여서
    'name-age' : '공우정 27'
}

console.log(member10['name-age']);


/* 객체의 메서드로 프로퍼티 값 바꾸기 */
let member11 = {
    name : '공우정',
    change : function(name) {
        this.name = name;
    }
}

console.log(member11.name);
member11.change('이름이 바뀌었다');
console.log(member11.name);

/* 객체의 모든 프로퍼티 값 문자열 반환 */
let member12 = {
    name : '공우정',
    age : 12,
    toString : function() {
        return this.name + ' ' + this.age;
    }
}

console.log(member12.toString());




