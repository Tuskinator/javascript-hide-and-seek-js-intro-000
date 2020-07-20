function getFirstSelector(selector) {
  return document.getElementsByTagName(selector)[0]
};
function nestedTarget() {
  return #nested.querySelector(.target)
};
function increaseRankBy(n) {
  var i = 0
  var john = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < john.length; i++) {
  john[i].innerHTML = (john[i] + n).toString();
  }
};
function deepestChild() {
  const lis = document.getElementById('app').querySelectorAll('div.grand-node div');
  const lis2
  for (let i = 0; i < lis.length; i++) {
    if (lis2.querySelectorAll('div.grand-node div') == null) {
      i = 1
      return lis2
    } else {
      lis2 = lis2.querySelectorAll('div.grand-node div')
    }
  }
};
