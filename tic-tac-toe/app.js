let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;//turn of O // turn of X
const winPattern= [[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]];


boxs.forEach((box)=>{
    box.addEventListener( "click",()=>{ 
        if(turnO){
            box.innerText="O";
            box.style.color="#FFEB00"
            turnO=false;
        }
        else{
            box.innerText="x";
            box.style.color="#0A97B0"
            turnO = true;        }
        
        box.disabled=true;
        checkWinner();

        
    })
});
const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
     

}




const disableBoxes=() =>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enableBoxes=() =>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner) =>{
    
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};



const checkWinner =()=>{
    for(let pattern of winPattern){
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;


        if(pos1!=""&&pos2!=""&&pos3!=""){
         if(pos1===pos2 && pos2===pos3){
          console.log(pos1,"is winner ");
          showWinner(pos1);
        }
    }
 }    
};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
