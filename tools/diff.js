function _diff(source, target) {
    const getType = Object.prototype.toString;
    if (getType.call(source) !== getType.call(target)) {
        return source;
    }
    switch (getType.call(source)) {
        case '[object String]':
            return source === target ? "" : source;
        case '[object Array]':
            return source.filter((v, i) => {
                return v !== target[i];
            });
        case '[object Object]':
            let diffResult = {};
            Object.keys(source).forEach((v, i) => {
                if (source[v] !== target[v]) {
                    diffResult[v] = source[v];
                }
            })
            return diffResult;
        default:
            return source;
    }
}
