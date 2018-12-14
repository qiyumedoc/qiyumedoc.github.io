function addSum(){
  var args1 = [].slice.call(arguments).reduce(function(a,b){
    return a+b;
  });
  function innerSum(){
    var args2 = [].slice.call(arguments).reduce(function(a,b){
      return a+b;
    });
    args1 += args2;
    return innerSum;
  }

  innerSum.toString = function(){
    return args1;
  }
  //输出函数的数值

  return innerSum;
}