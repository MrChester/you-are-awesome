// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    var rSSchoolStudent = {};
    Object.defineProperty(rSSchoolStudent, 'name', {
        value: 'Yauheni',
        configurable: true,
        writable: true,
        enumerable: true
    });
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value'
    })
    return propertyName;
};
const createProtoMagicObject = () => {
    return Function;
};
let count = 0;
const incrementor = () => {
    count++;

    incrementor.__proto__.valueOf = function() {
        return count;
    }

    return incrementor;
};


let asyncCount = 0
const asyncIncrementor = () => {
    asyncCount++;
    return new Promise((resolve) => {
        resolve(asyncCount);
    });
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(param);
        }, 1000);
    });
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    /*
    typeof null - 'object';
    JSON.stringify(null) - "null";
    JSON.parse(null) - null;
    */
    return null;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    var length = array.length;

    for (var i = 0; i < length - 1; i++) {
        for (var j = 1; j < length - i; j++) {
            if (array[j - 1].isPrototypeOf(array[j])) {
                array[j] = [array[j - 1], array[j - 1] = array[j]][0];
            }
        }
    }
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;