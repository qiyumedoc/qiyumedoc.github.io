Function.prototype.call2 = function (context) {
    context.fn = this;

    var args = [];
    for (var i = 1; i < 3; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn;

}
function sayInfo(age) {
    console.log("name:" + this.name)
    console.log("age:" + age)
}
var user = {
    name: "zzx"
}
sayInfo.call2(user, 100)