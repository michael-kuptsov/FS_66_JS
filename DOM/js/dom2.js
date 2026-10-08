console.log('Task Running');


function getJsonFeomString(content){
    const result = JSON.parse(content);
    return result;
}


let text = '{"userName":"John","age":25}';
let json = getJsonFeomString(text);
console.log(json);
console.log('Task Completed');