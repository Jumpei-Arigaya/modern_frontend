modern_frontend// let age:number = 36;
// let isDone:boolean = false;
// let color:string = 'red';
// let myNumber:string = '200'
// // myNumber = 200;
// // myNumber = '二百';

// const user:{name?: string, age:number} = {
//     age:1,
// }


// // console.log(age)
// // console.log(isDone)
// // console.log(color)
// // console.log(user)

// const printName = (firstName:string, formatter: (name:string) => string) => {
//     alert(formatter(firstName))
// }

// const formatName = (name:string) => {
//     return `こんにちは${name} さん`
// }

// printName('nao', formatName)

// for(let i=0; i >100; i++){
//     console.log(i)
// }

const genBirdsInfo = (name: string):string[] => {
    return name.split(',')
}
const singBirds = (birdInfo: (x: string) => string[]) => {
    return birdInfo('hato, kiji')[0] + 'piyo piyo'
}

// console.log(singBirds(genBirdsInfo))
// console.log(singBirds('dobato'))

// window.confirm = () => {
//     console.log('testaaaaaaaaaaaaaaaaaa')
// }
window.alert = () => {
    console.log('123asdasdasdasdasdasdas')
}
// confirm('1')
// alert()

type Formatrter = (a:string) => string

const printName = (firstName:string, formatter: Formatrter) => {
    console.log(formatter(firstName))
}

const formatName = (name:string) => {
    return `こんにちは${name} さん`
}

// printName('jun', formatName);

type Lavel = {
    [key: string]: string
}

const lavels:Lavel = {
    topTitle: 'トップページのタイトルです',
    topSubtitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature: 'トップページの機能2です',
}

// const hoge:Lavel = {
//     message: 100;
// }

// console.log(lavels);

// interface Point {
//     x: number;
//     y: number;
// }

const printPoint = (point: Point) => {
    console.log(`x座標は${point.x}です`)
    console.log(`y座標は${point.y}です`)
    console.log(`z座標は${point.z}です`)
}

// interface Point {
//     z: number;
// }

// printPoint({x: 100, y:100, z:200})

interface Point {
    x: number;
    y: number;
    z?: number;
}

// class MyPoint implements Point {
//     x: number;
//     y: number;
//     z?: number;

//     constructor(x: number, y: number, z?: number) {
//     this.x = x;
//     this.y = y;
//     this.z = z; // this could be undefined if not passed in
//     }       
// }

interface Colorful {
    color : string;
}

interface Circle {
    radius : number;
}

interface ColorfulCircle extends Colorful, Circle{}

const cc:ColorfulCircle = {
    color: 'red',
    radius: 10
}

// console.log(cc)

// インターフェースはクラスやデータの一側面を定義した型
// インターフェースにマッチする形でもその値以外にほかのフィールドやメソッドがある前提
// オブジェクトそのものではなく、クラスやオブジェクトの一部のプロパティや関数を含む一部の振る舞いを定義するものであれば、インターフェースが適している

class Point {
    x: number;
    y: number;

    constructor(x:number = 0, y:number = 0) {
        this.x = x;
        this.y = y;
    }

    moveX(n:number):void {
        this.x += n;
    }

    moveY(n:number):void {
        this.y += n;
    }
}

const point = new Point()
point.moveX(1000000);
// console.log(point.x)
// console.log(point.y)

interface IUser {
    name: string;
    age: number;
    sayHello: () => string;
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = '';
        this.age = 0;
    }
    // インターフェースに定義されているメソッドを実装しない場合はコンパイル時にエラーになる
    sayHello(): string {
        return `こんにちは、私は${this.name}、${this.age}歳です。`
    }
}

const user = new User();
user.name = 'Takuya';
user.age = 36;
// console.log(user.sayHello())

class BasePoint3D {
    public x: number;
    private y: number;
    protected z: number;

    constructor (x:number = 0, y:number = 0, z:number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

// インスタンス化した場合のアクセス制御
const basePoinst = new BasePoint3D();
basePoinst.x;
// basePoinst.y; privateのためアクセス不可
// basePoinst.z; protectedのためアクセス不可


// クラス継承時のアクセス制御
class ChildPoint extends BasePoint3D {
    constructor(){
        super()
        this.x;
        // this.y; privateのためアクセス不可
        this.z;
    }
}

const DDirection = {
    'Up': 0,
    'Down': 1,
    'Left': 2,
    'Right': 3,
}

// console.log(Direction)
// Direction.down

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Left
// console.log(direction) // Leftは[2]番目なので2が返る

// direction = '123'; エラー

enum StringDirection {
      Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

const value = 'DOWN';
const enumValue = value as StringDirection;

// if(enumValue === StringDirection.Down) {
//     console.log('Down is selected')
// }
// Union型でもほぼ同じことができ、好む開発者もいる

class Queue<T> {
    private array: T[] = [];

    // Tの型の値を配列に追加
    push(item: T) {
        this.array.push(item)
    }

    // Tの型の配列の最初の値を取り出す
    pop(): T | undefined {
        return this.array.shift()
    }
}

const queue = new Queue<number>();
queue.push(111);
queue.push(222);
// console.log(queue.pop())
// queue.push('test'); 型エラー
let str = 'fuga';
// str = queue.pop() 型エラー

const printId = (id: string | number) => {
    console.log(id);
}

printId(123);
printId('9999')

type Id  = number | string;

type Identity = {
    id : number | string;
    name: string
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}

type IdentityOrContact = Identity | Contact;

const id: IdentityOrContact = {
    id: '111',
    name: 'test'
}

const contact: IdentityOrContact = {
    name: 'taturo',
    email: 'test@gmail.com',
    phone: '090-0000-0000',
}

type Employee = Identity & Contact;

const employe: Employee = {
    id: 111,
    name: 'Takuya',
    email: 'test@example.com',
    phone: '0123456789'
}

// const employeeContact: Employee = {
//     name: 'Takuya',
//     email: 'test@example.com',
//     phone: '0123456789',
// }
// Type '{ name: string; email: string; phone: string; }' is not assignable to type 'Employee'.
//   Property 'id' is missing in type '{ name: string; email: string; phone: string; }' but required in type 'Identity'.(2322)
// input.tsx(282, 5): 'id' is declared here.

let postStatus: 'draft' | 'published' | 'deleted';
postStatus = 'draft';
// postStatus = 'drafts';
// Type '"drafts"' is not assignable to type '"draft" | "published" | "deleted"'. Did you mean '"draft"'?

const compare = (a: string, b: string): -1 | 0 | 1 => {
    return a === b ? 0 : a > b ? 1 : -1;
}

// console.log(compare('6','9'))

const error = (message: string):never => {
    throw new Error(message)
}

const foo = (x: string | number | number[]): boolean => {
    if(typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    return error('Never happens')
}

// console.log(foo([1,2]))

enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = (type: PageType) => {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting';
        case PageType.EditProfile:
            return 'Edit Profile';
        case PageType.ChangePassword:
            return 'Change Password';
        default:
            const wrongType:never = type;
            throw new Error(`${wrongType} is not in PageType`);
    }
}
console.log(getTitleText(PageType.ChangePassword))
// never型は、「決して起きない」ことをコンパイラに伝える

interface User2 {
    name: string,
    social?: {
        facebook:boolean,
        twitter: boolean,
    }
}

let user2: User2;
user2 = {
    name: 'takuya',
    social : {
        facebook: true,
        twitter: true,
    }
}
console.log(user2.social?.facebook);

user2 = {
    name: 'you'
}
console.log(user2.social?.facebook);

const addOne = (value: string | number) => {
    if (typeof value === 'string') {
        return Number(value) + 1;
    } 
    return value + 1;
}

console.log(addOne('7'))

type User3 = {
    info? : {
        name: string;
        age: number;
    }
}

let response = {};
const user3 = {response} as any as User3;

if (user3.info) {
    console.log(user3.info.name)
}

interface User4 {
    name: string;
    age: number;
    email: string;
}

type UserKey = keyof User;
const key1: UserKey = 'name';
// const key2: UserKey = 'phone';
// Type '"phone"' is not assignable to type 'keyof User'.(2322)
// const key2: keyof User
// オブジェクトに存在するキーを使用してなにか関数の処理を行いたい場合などに安全に実装

type SupportVersions = {
    [env: number]: boolean;
}

let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
    // 'v105': true,
    // Type '{ 102: false; 103: false; 104: true; v105: boolean; }' is not assignable to type 'SupportVersions'.
//   Object literal may only specify known properties, and ''v105'' does not exist in type 'SupportVersions'.(2322)
// (property) 'v105': boolean
}

console.log(versions);

type User5 = {
    readonly name: string;
    readonly gender: string;
}

let user5: User5 = {
    name: 'takuya',
    gender: 'female',
}

// user5.gender = 'male';
// Cannot assign to 'gender' because it is a read-only property.(2540)
// (property) gender: any
// readonlyは読み取り専用だが、変更不可という意味
// constは変数の代入に対して行う宣言で、readonlyはオブジェクトやクラスのプロパティ対して行う宣言でコンパイル時にエラーを検知

type User6 = {
    name: string;
    gender: string;
}

type UserReadonly = Readonly<User6>;
let user6: User6 = {
    name: 'takuya',
    gender: 'Male',
}
let user6Readonly: UserReadonly = {
    name: 'takuya',
    gender: 'Male',
}

user6.gender = 'test';
// user6Readonly.gender = 'test';

const x:unknown = 123;
const y:unknown = 'Hello';

// console.log(x.toFixed(1))
// 'x' is of type 'unknown'.(18046)
// const x: unknown

// console.log(y.toLowerCase())
// 'y' is of type 'unknown'.(18046)
// const y: unknown

if (typeof x === 'number') {
    console.log(x.toFixed(1))
}
if (typeof y === 'string') {
    console.log(y.toLowerCase())
}

const fetchFromServer = (id: string): Promise<{success: boolean}> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({success: true});
        }, 1000);
    });
};

const asyncFunc = async(): Promise<string> => {
    const result = await fetchFromServer('111');
    return `The result: ${result.success}`
}

(async () => {
    const result = await asyncFunc();
    console.log(result);
})

asyncFunc().then(result => console.log(result))