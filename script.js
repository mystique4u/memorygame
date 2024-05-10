// Дата, как сохранить ?
let myMain = document.querySelector('#myMain');
let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
function createUser() {
}
function showTheStatistics() {
}
createCarts();
function createCarts() {
    generateCarts();
    generateCarts();
}
//createCarts();
function generateCarts() {
    myNumber.forEach(element => {
        let newDiv = document.createElement("div");
        newDiv.className = `card-${element}`;
        // newDiv.style.margin = "1px";
        newDiv.style.border = "1px solid red";
        newDiv.style.height = "30px";
        newDiv.style.backgroundImage = `url(/project/cards_img/${element}.svg)`;
        newDiv.style.display = "flex"
        newDiv.style.width = "45px";
        newDiv.style.height = "45px";
        newDiv.style.backgroundSize = "cover";
        newDiv.style.backgroundRepeat = "no-repeat";
        myMain.appendChild(newDiv);
        console.log(newDiv.className);
        //newDiv.addEventListener("click", matchCards);
    });
}
document.querySelector("main").addEventListener("click", (event) => {
    const id = event.target.id;
    if (id) {
        console.log(id);
        //compareNum(id);
        // document.querySelector("main").innerHTML = renderHTML();
    }
});
function compareNum() {
}
function getTheClickedCards() {
}
function finishTheGame() {
}












