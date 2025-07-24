const startButt = document.querySelector('#start');
const stopButt = document.querySelector('#stop');

const randomColor = function () {
  const hex = '012345678ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colorChange = function () {
    document.body.style.backgroundColor = randomColor();
}

let colorStart;
startButt.addEventListener('click',function(){
  if(!colorStart){
    colorStart = setInterval(colorChange,1000);
  }
})

stopButt.addEventListener('click', function () {
  clearInterval(colorStart);
  colorStart = null;
})

