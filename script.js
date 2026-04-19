let count = 0;
document.getElementById('peopleCount').style.fontSize="100px";
      
function countUp() {
  const show = document.getElementById('peopleCount');
  count = count + 1;
  show.innerText = count;
  show.style.color = "black"
};
      
function countDown() {
  const show = document.getElementById('peopleCount');
  if (count > 0) {
    count = count - 1;
    show.innerText = count;
    show.style.color = "black";
  } else {
    show.style.color = "red";
    show.innerText = "Error";
    
  };
};
console.log(count)