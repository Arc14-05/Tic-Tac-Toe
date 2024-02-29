let turn = "X";
console.log("hi")
let gameOver = false;


function change(){
    if(turn==="X") turn = "O";
    else turn = "X";
    return turn;
    
}

function checkWin(){
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== ""){
            document.querySelector('.winner').innerText = boxText[e[0]].innerText + " Won!!";
            gameOver = true;
        }
    });
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e =>{
    let boxText = e.querySelector(".boxText");
    e.addEventListener('click', ()=>{
        if(boxText.innerText == ''){
            if(gameOver) return;
            boxText.innerText = turn;
            change();
            checkWin();
        }
    })
});

reset.addEventListener( 'click' , ()=>{
    console.log('reset done');
    let boxes = document.querySelectorAll(".boxText");
    Array.from(boxes).forEach(element =>{
        element.innerText = "";
    } )
    gameOver = false;
    document.querySelector('.winner').innerHTML = "";
})