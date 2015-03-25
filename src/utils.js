    // K
    // aopFunc使用方法
    // obj = { before : function (){}, main: function (){}, callback: function (){}, context}
    // 调用时aopFunc(obj)(args)
    // before接收的参数为args
    // main接收的参数为args+before的结果
    // callback接收的参数为args+before+main的结果
    // 最后返回callback的结果
    function aopFunc(obj) {
        if (typeof obj.before !== 'function') {
            obj.before = default
        }
        if (typeof obj.main !== 'function') {
            obj.main = default
        }
        if (typeof obj.callback !== 'function') {
            obj.callback = default
        }
        obj.context = obj.context && null;

        function default() {
            return arguments[arguments.length - 1];
        }

        return function () {
            var args = Array.prototype.slice.apply(arguments);
            args.push(obj.before.apply(obj.context, args));
            args.push(obj.main.apply(obj.context, args));

            return obj.callback.apply(obj.context, args);
        }
    }
