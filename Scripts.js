const BtnGreen = document.querySelector("#Green");
const BtnSilver = document.querySelector("#Silver");
const BtnGold = document.querySelector("#Gold");
const BtnGrafiti = document.querySelector("#Grafiti");
const BtnBlue = document.querySelector("#Blue");

const ImgIPhone = document.querySelector("#ImgIPhone")

BtnGreen.addEventListener("click", () => {

ImgIPhone.src = `img/iphone_green.jpg`;

BtnGreen.classList.add("selected");

BtnBlue.classList.remove("selected")
BtnGold.classList.remove("selected")
BtnGrafiti.classList.remove("selected")
BtnSilver.classList.remove("selected")

})

BtnSilver.addEventListener("click", () => {

    ImgIPhone.src = `img/iphone_Silver.jpg`;
    
    BtnSilver.classList.add("selected");
    
    BtnBlue.classList.remove("selected")
    BtnGold.classList.remove("selected")
    BtnGrafiti.classList.remove("selected")
    BtnGreen.classList.remove("selected")
    
})

BtnGold.addEventListener("click", () => {

    ImgIPhone.src = `img/iphone_golden.jpg`;
    
    BtnGold.classList.toggle("selected");
    
    BtnBlue.classList.remove("selected")
    BtnGreen.classList.remove("selected")
    BtnGrafiti.classList.remove("selected")
    BtnSilver.classList.remove("selected")
    
})

BtnGrafiti.addEventListener("click", () => {

    ImgIPhone.src = `img/iphone_Grafite.jpg`;
    
    BtnGrafiti.classList.toggle("selected");
    
    BtnBlue.classList.remove("selected")
    BtnGold.classList.remove("selected")
    BtnGreen.classList.remove("selected")
    BtnSilver.classList.remove("selected")
    
})

BtnBlue.addEventListener("click", () => {

    ImgIPhone.src = `img/iphone_Blue.jpg`;
    
    BtnBlue.classList.toggle("selected");
    
    BtnGreen.classList.remove("selected")
    BtnGold.classList.remove("selected")
    BtnGrafiti.classList.remove("selected")
    BtnSilver.classList.remove("selected")
    
})