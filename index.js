document.addEventListener("DOMContentLoaded", () => {

  let w = window.innerWidth;
  let h = window.innerHeight; 
  let speed = 0.2;
  const button = document.querySelector("button");
  
  const div = document.querySelector("#buttonContainer");
  const modal = document.querySelector(".Modal");


  function centerButton(){
  div.style.transform = `translate(${w / 2 - 50}px, ${h/2-50}px)`;
  }
  centerButton();
  
  function resizeWindow() {
    h = window.innerHeight;
    w = window.innerWidth;
    centerButton();
  }

  function closeModal(){
    modal.style.display = "none";
    centerButton();
  }


  window.onresize = resizeWindow;


  div.addEventListener("mouseenter", e => {
    if(speed < 2){
      speed += 0.05;
      div.style.transition = `cubic-bezier(0.4, 0, 0.2, 1) ${speed}s`;
    }
    div.style.transform = `translate(${Math.random(1)*(w-100)}px, ${Math.random(1) * (h-100)}px)`;
  });

  document.addEventListener("mousemove", e => {
    // console.log("MOUSE X:", e.clientX);
    // console.log("MOUSE Y:", e.clientY);
    const {mouseX: clientX, mouseY: clientY} = e;
    const {left, top, right, bottom} = button.getBoundingClientRect();
    // console.log(top, right, bottom, left);
  });

  button.addEventListener("click", e => {
    e.preventDefault();
    speed = 0.2;
    modal.style.display = 'flex';
  });

  

});