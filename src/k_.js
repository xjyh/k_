
(function (window) {

    function k_(func){
        this.func = func;
    }

    k_.prototype.before = function (func) {
        var context = this;

        return init(function () {
            var args = Array.prototype.slice.apply(arguments);
            args.push(func.apply(context, args));

            return context.func.apply(context, args);
        });
    }

    k_.prototype.after = function (func) {
        var context = this;

        return init(function () {
            var args = Array.prototype.slice.apply(arguments);
            args.push(context.func.apply(context, args));

            return func.apply(context, args);
        });
    }

    function init (func) {
        tmp.main = new k_(func);
        tmp.before = tmp.main.before;
        tmp.after = tmp.main.after;
        tmp.func = tmp.main.func;
        function tmp () {
            func.apply(tmp.main, arguments);
        }
        return tmp;
    }


    window.k_ = init;

})(window);

var test = k_(function (test) {
    console.log("Main: " + arguments[arguments.length-1]);
    console.log(test);
    return true;
}).before(function (test) {
    console.log("Before: " + arguments[0]);
    return "before1";
}).after(function (test) {
    console.log("After: " + arguments[arguments.length-1]);
    return "xixi";
});

test("haha");
