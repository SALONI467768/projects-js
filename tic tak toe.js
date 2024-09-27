let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
  let turn0=true;
  const winPattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
  ];
  const resetGame = () =>{
    turn0 = true;
    msgContainer.classList.add("hide");
    enableBoxes();
  };
  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "x";
            turn0 = "true ";
        }
        box.disabled = true;
            checkWinner();
        
    });
});
const disableBoxes = () =>{
for (let box of boxes){
  box.disabled = true;
}
};
const enableBoxes = () =>{
  for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
  };


const showWinner = (winner) =>{
  msg.innerText = 'congratulation,winner is ${winner}';
  msgContainer.classlist.remove("hide");
  disableBoxes();
};



const checkWinner=()=>{
  for(let pattern of winPattern){
    let pos1val = boxes [pattern[0]].innerText;
    let pos2val = boxes [pattern[1]].innerText;
    let pos3val = boxes [pattern[2]].innerText;

    if( pos1val !==""&& pos1val ===pos2val && pos1val ===pos3val ) {
      // if (pos1val ==pos2Val && posVal===posVal)
        
        showWinner(pos1val);
        return;
      }
    }
  }


newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame);