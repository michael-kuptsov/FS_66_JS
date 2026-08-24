let a = 3.99999;
let res = Math.floor(a);
console.log(res);
a = -3.9999
res = Math.floor(a);
console.log(res);

a = 1.25;
res = Math.round(a);
console.log(res);

a = 1.77;
res = Math.round(a);
console.log(res);

a = -1.77;
res = Math.round(a);
console.log(res);

a = -1.11;
res = Math.round(a);
console.log(res);

res = Math.PI;
console.log(res);


a = 1.77;
res = Math.trunc(a);
console.log(res);

a = 1.11212121;
res = Math.trunc(a);// trunc  дает нам жесткое округлкние 
console.log(res);

res = Math.PI;
res = res.toFixed(2);
console.log(res, typeof res);
res = +res;
console.log(res, typeof res);

//string

const str = 'Hello JavaScript !!!!';
console.log(str.length);
res = str.charAt(2);//Символ под индексом - дает нам добратся до символа
console.log(res);
res = str[19];
console.log(res);

for (s of str) {
    console.log(s);
    
}

res = str.indexOf('a')
console.log(res);
res = str.indexOf('ava')
console.log(res)
res = str.lastIndexOf('a')
console.log(res)
res = str.substring(4,8)
console.log(res)
