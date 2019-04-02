const sum = (a, b) => a + b
const mul = (a, b) => a * b


var myModule = (function () {
    function foo() {
        // private function `foo` inside closure
        return "foo"
    }
    return {
        bar: function (a, b) {
            // public function `bar` returned from closure
            return a + b;
        }
    }
}())

console.log(myModule.bar(3, 2));

function abc() {
    return {
        def: function (arg) {
            return arg + 'def';
        }
    }
}

console.log(abc.def("abc"))

module.exports = { sum, mul, myModule }