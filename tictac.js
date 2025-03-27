let boxes = document.querySelectorAll(".box");

let resetbtn= document.querySelector("#reset");

let newbtn= document.querySelector("#new") ;

let msg_container=document.querySelector(".msg");

let message= document.querySelector("#message");

let turnO= true;

const win= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 boxes.forEach((box) => {
     box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turnO) {
           box.innerText="O";
           turnO=false;
        }
        else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        check_win();
     })
 })


 const enable= () => {
     
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
 
 const disable =() => {
   
    for (let box of boxes) {
        box.disabled=true;
    }
}


const show_win = (winner) => {
  message.innerText='congo winner is' + winner;
  msg_container.classList.remove("hide");
  disable();

}


const reset =() => {
    turnO=true;
    enable();
    msg_container.classList.add("hide");
}
const  check_win=() =>{


    for( let pattern of win) {
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[patter[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        if(pos1val!="" && pos2val!="" && pos3val!="") {
            if(pos1val===pos2val && pos2val===pos3val) {
                // console.log("winner",pos1val);
                show_win(pos1val);
            }
        }
    }

    // let pos1val=boxes[pattern[0]].innerText;
    // let pos2val=boxes[pattern[1]].innerText;
    // let pos3val=boxes[pattern[2]].innerText;
 }

 newbtn.addEventListener("click",reset);
 resetbtn.addEventListener("click",reset);