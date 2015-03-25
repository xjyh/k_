
(function (window) {

    function k_(func){
        this.func = func;
    }

    k_.prototype.run = function () {
        return this.func.apply(this, arguments);
    }

    k_.prototype.before = function (func) {
        var context = this;

        return new k_(function () {
            var args = Array.prototype.slice.apply(arguments);
            args.push(func.apply(context, args));

            return context.func.apply(context, args);
        });
    }

    k_.prototype.after = function (func) {
        var context = this;

        return new k_(function () {
            var args = Array.prototype.slice.apply(arguments);
            args.push(context.func.apply(context, args));

            return func.apply(context, args);
        });
    }


    window.k_ = function (func) {
        return new k_(func);
    }

})(window);
