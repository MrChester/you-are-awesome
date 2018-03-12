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

var count = 0;
const incrementor = () => {
    count++;

    incrementor.__proto__.valueOf = function() {
        return count;
    }

    return incrementor;
};



const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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