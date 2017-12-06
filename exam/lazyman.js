var LazyMan = (function () {
    var callbacks = [];
    var isRunning = false;

    function _addFunc(callback, delay) {
        callback.delay = delay;
        callbacks.push(callback);

        if (!isRunning) {
            isRunning=true;
            _next(callbacks);
        }
    }

    function _next(callbacks) {
        if (!callbacks.length) {
            isRunning = false;
        } else {
            var callback = callbacks.shift();
            if(callback.delay){
                setTimeout(function(){
                    callback();
                    _next(callbacks);
                },callback.delay);
            }else{
                callback();
                _next(callbacks);
            }
        }
    }

    function _lazyMan(name) {
        if (this instanceof _lazyMan) {
            this.name = name;
            console.log('My name is ' + this.name);
            return this;
        } else {
            return new _lazyMan(name);
        }
    }

    _lazyMan.prototype.doSports = function (sport) {
        _addFunc(function () {
            console.log('I am ' + sport);
        });
        return this;
    }

    _lazyMan.prototype.sleep = function (time) {
        _addFunc(function () {
        }, time * 1000);
        return this;
    }

    return _lazyMan;
})();
LazyMan('Jason').doSports('running').sleep(10).doSports('walking');
