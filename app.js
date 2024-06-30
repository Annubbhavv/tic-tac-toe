console.log("welcome to tic tac toe");
let turn = "X";
let gameover = false;


//change turn
const changeTurn = ()=>{
    return turn === "0"? "X":"0";
}

const changeColor = ()=>{
    return turn === "0"? "orange":"skyblue";
}

function gamereset(){
    let box = document.querySelectorAll(".box");
    for(b of box){
        b.style.backgroundColor = "#7b7b7b";
    }
    let bt = document.querySelectorAll(".boxtext");
    for(t of bt){
        t.innerText = "";
    }
    turn = "X";
    gameover = false;
    document.querySelector(".info").innerText = `Turn for ${turn}`;
    
    
}

//function to check for a  win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector(".info").innerText = `${boxtext[e[0]].innerText} Won`;
            console.log("won");
            gameover = true;
            setTimeout(gamereset,2000);
        }
    })

//     for(let win of wins){
//         for(let bt of boxtext){
//             if((bt[win[0]].innerText === bt[win[1]].innerText) && (bt[win[2]].innerText === bt[win[1]].innerText) && bt[win[0]]!= ""){
//                 document.querySelector("info").innerText = `${bt[win[0]]} Won`;
//                 console.log("won");
//                 gameover = true;
//         }
//     }
// }
}

//game logic
let boxes = document.querySelectorAll(".box");
for(let box of boxes){
    let boxtext = box.querySelector(".boxtext");
    box.addEventListener("click",()=>{
        console.log("button clicked");
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            let color = changeColor();
            box.style.backgroundColor = color;
            checkwin();
            turn = changeTurn();
            if(!gameover){
                document.querySelector(".info").innerText = `Turn for ${turn}`;
            }
        }
    })
}


// reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click",gamereset);