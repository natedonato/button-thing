document.addEventListener("DOMContentLoaded", () => {

  let w = window.innerWidth;
  let h = window.innerHeight; 
  let speed = 0.2;
  const button = document.querySelector("button");
  
  const div = document.querySelector("#buttonContainer");
  const modal = document.querySelector(".Modal");
  const close = document.querySelector(".close");



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
    speed = 0.2;
    modal.style.display = "none";
    centerButton();
  }
  close.addEventListener("click", closeModal)


  window.onresize = resizeWindow;


  div.addEventListener("mouseenter", e => {
    if(speed < 2){
      speed += 0.1;
      div.style.transition = `cubic-bezier(0.4, 0, 0.2, 1) ${speed}s`;
    }
    div.style.transform = `translate(${Math.random(1)*(w-100)}px, ${Math.random(1) * (h-100)}px)`;
  });

  if(screen.width <= 699){
    div.addEventListener("touchstart", e => {
      e.preventDefault();
      console.log(speed);

      if(speed < 2){
        speed = Math.floor((0.05 + speed) * 100)/100;
        div.style.transition = `cubic-bezier(0.4, 0, 0.2, 1) ${speed}s`;
      };

      if(speed === 0.5){
        button.addEventListener("touchstart", function buttonMobile(e) {
          e.preventDefault();
          speed = 0.2;
          modal.style.display = 'flex';
          centerButton();
          button.removeEventListener("touchstart", buttonMobile)
        });
      }





      div.style.transform = `translate(${Math.random(1)*(w-100)}px, ${Math.random(1) * (h-100)}px)`;
    });

  }else{

  button.addEventListener("click", e => {
    e.preventDefault();
    speed = 0.2;
    modal.style.display = 'flex';
    centerButton();
  });

  }


  

});