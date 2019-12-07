window.onload = function(){
    let div = document.querySelector('#son');
//防抖
const debounce=(fn,delay = 500)=>{
    let timer= 0;
    return (...args)=>{//解构参数
        self = this; //拿到指向
        clearTimeout(timer);//在每一次启动计时器的时间中，关闭计时器
        timer = setTimeout(() => {//开启计时器
            fn.call(self,args);//回调函数
        }, delay);
    }
}
    //节流
    const throttle=(fn,delay = 500)=>{
        let timer= 0;
        return (...args)=>{
            self = this;
            if(timer){
                return;   //如果计时器开启中则直接返回，等结束后再调用
            }
            fn.call(self,args);//固定回调函数的指向
            timer = setTimeout(() => {//等时间结束后，再次开启计时器
                clearTimeout(timer);
                timer = 0;
            }, delay);
        }
    }
    const move = (a)=>{
    console.log(a,this)
}  
div.addEventListener("mousemove",debounce(move,300));
//div.addEventListener("mousemove",throttle(move,300));
}    

//准备合成
/*Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;//拿到指向
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
//准备换成es6的方法做
    var result = eval('context.fn(args)');
    delete context.fn
    return result;
}
var value = 2;
var obj = {
    value: 1
}
function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar.call(null);
console.log(bar.call2(obj, 'kevin', 18));*/


