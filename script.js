let count = 0;
document.getElementById('peopleCount').style.fontSize="100px";
      
function countUp() {
  const up = document.getElementById('peopleCount');
  count = count + 1;
  up.innerText = count;
};
      
function countDown() {
  const low = document.getElementById('peopleCount');
  count = count - 1;
  low.innerText = count;
  if (count < 0) {
    low.innerText = "Error";
    low.style.color = "red";
  };
};
console.log(count)