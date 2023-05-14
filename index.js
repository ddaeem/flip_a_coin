let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);
    console.log(i);
    coin.style.animation = "none";
    if(i){
        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }else{
        setTimeout(function() {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    let heads_count = document.querySelector("#heads-count");
    if(heads_count){
        heads_count.textContent = `Heads: ${heads}`;
    }else{
        console.error("gros naze");
    }


    let tails_count = document.querySelector("#tails-count");
    if(tails_count){
        tails_count.textContent = `Heads: ${tails}`;
    }else{
        console.error("gros++ naze");
    }
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", ()=>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
})