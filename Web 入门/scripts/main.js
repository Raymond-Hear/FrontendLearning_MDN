//点击图片时会切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//获取index.html中的新按钮和标题的引用，并保存至变量中
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//设置个性化欢迎信息
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

//初始化代码，在页面初次读取时进行构造工作
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

//为按钮设置 onclick 事件处理器，点击后可自由设置新名字
 myButton.onclick = function() {
    setUserName();
 }

 //更新 setUserName() 来检查用户是否输入了 null 或者空名字，防止name为空
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }