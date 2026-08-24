const massive = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];

function comparator(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

const comparator2 = function(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
};

const comparator3 = (a, b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
};

console.log(comparator(massive[3], massive[0]));
console.log(comparator2(massive[0], massive[3]));
console.log(comparator3(massive[3], massive[0]));


function filter(massive, comparator) {
    let big = massive[0];
    for (let i = 1; i < massive.length; i++) {
        if (comparator(massive[i], big) > 0) {
            big = massive[i];
        }
    }
    return big;
}



console.log(filter(massive, comparator));