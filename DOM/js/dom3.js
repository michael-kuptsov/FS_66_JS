console.log('Task Running');

function getJsonFromString(content){
    const result = JSON.parse(content);
    return result;
}

try {
    const text = '{userName":"John","age":25}';
    const result = getJsonFromString(text);
    console.log(result);
} catch (error) {
    console.error('Error parsing JSON:');
    console.log(error.message);
}

console.log('--------------------------------------')

try {
    const text = '{"userName":"John","age":25}';
    const result = getJsonFromString(text);
    console.log(result);
} catch (error) {
    console.error('Error parsing JSON:');
    console.log(error.message);
}

console.log('Task Completed');