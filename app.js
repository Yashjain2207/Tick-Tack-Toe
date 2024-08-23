let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newButton = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container-hide");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns =[[0,1,2],[1,4,7],[2,5,8],
                    [0,3,6],[2,4,6],[3,4,5],
                    [0,4,8],[6,7,8]  
                   ];

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
    
                                      

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
         if(turnO){
            box.innerText="O";
            box.style.color = "Red";
            turnO=false;
              }
              else{
                box.innerText="X";
                box.style.color = "Black";


                turnO=true;
                  }
                  box.disabled = true;
        checkWinner();          
    })
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

} 
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1_val = boxes[pattern[0]].innerText;
        let pos2_val = boxes[pattern[1]].innerText;
        let pos3_val = boxes[pattern[2]].innerText;

        if(pos1_val != "" && pos2_val != "" && pos3_val != ""){
            if(pos1_val === pos2_val && pos2_val === pos3_val){
                showWinner(pos1_val);
            }

        }
    }
}
newButton.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

