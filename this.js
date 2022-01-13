

const nome={}

nome.names='pedro'

function obj(names){
    this.names=names
    this.exe=function(){
        console.log('exe...')
    }
}

const objs=new obj('CADEIRA')
const objs2=new obj('MESA')

console.log(objs.names)
console.log(objs2.names)
objs2.exe()



let a =10
let b=5

b+=a  //  b= b+a
console.log(b)

b+=10
console.log(b) //b=15 + 10 = 25

b%=5

console.log(b)
