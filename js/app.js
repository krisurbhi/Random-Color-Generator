const getColor= () => {
    // Hex Code
    const  randomNumber = Math.floor(Math.random() * 16777215); //we are mutliplying by this number to get a hexadecimal number to be later converted into hexadecimal code
    const randomCode = "#" +randomNumber.toString(16); 
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    // to copy the random color code in clipboard
    navigator.clipboard.writeText(randomCode);
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
// initial call
getColor();
