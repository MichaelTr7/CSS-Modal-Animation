window.onload = function(){
document.getElementById('Big_Button').addEventListener("click",Move_Modal); 
}

function Move_Modal(){
  let Modal = document.getElementById('Modal');
  document.getElementById("Big_Button").classList.toggle("Light_Up");
  
  if(Modal.classList.contains('Slide_Down_Animation')){
    Modal.classList.remove('Slide_Down_Animation');
    void Modal.offsetWidth;
    Modal.classList.add('Slide_Up_Animation');
  }else{
    Modal.classList.remove('Slide_Up_Animation');
    void Modal.offsetWidth;
    Modal.classList.add('Slide_Down_Animation');
  }  
}