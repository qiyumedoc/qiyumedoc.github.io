var xhr = new XMLHttpRequest();

var c = 1;

function getXHR() {
    var a = 'https://api.tumiv.com/v2/cqupt/student?page=';
    var b = '&year=2015';
    var New = a + c + b;
    xhr.open("get", New, true);
    xhr.send();
    //发送请求

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {

            var page = JSON.parse(xhr.responseText);

            for (var i = 0; i < 19; i++) {
                var str = JSON.stringify(page.result[i]);
                var div = document.querySelector('#page');
                div.insertAdjacentHTML("beforeend", str + '</br>');
            }
        }
    }
    var button = document.querySelector('.button.b' + c)
    button.style.color = "blue"

}
//接收数据

getXHR();

var buttonUp = document.querySelector('.get.Up');

buttonUp.onclick = function () {
    if (c > 1) {

        document.querySelector('.button.b' + c).removeAttribute("style")
        //清除上一个按钮的样式

        c = c - 1;
        document.querySelector('#page').innerHTML = "";
        getXHR()
    } else {
        alert('不能再往前翻了！');
    }
}
//点击显示上一页
var buttonDown = document.querySelector('.get.Down');

buttonDown.onclick = function () {
    if (c < 10) {

        document.querySelector('.button.b' + c).removeAttribute("style")
        //清除上一个按钮的样式

        c = c + 1;
        document.querySelector('#page').innerHTML = "";
        getXHR();
    } else {
        alert('已经是最后一页了！')
    }
}

//点击显示下一页

