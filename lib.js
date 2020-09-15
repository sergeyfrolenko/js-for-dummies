///////// lib //////////
function cl(msg) {
  console.log(msg);
}
function createArray(n) {
  const result = [];
  let temp = 0;
  for(let i = 1; i < n; i++) {
    temp = Math.floor(Math.random()*100);
    result.push(temp);
  }
  return result;
}
function sortArray(arr) {
  return arr.sort((a,b)=>a-b);
}
const find = {
  id: function (id) {
    return document.getElementById(id);
  }
};
///////// lib end //////////
