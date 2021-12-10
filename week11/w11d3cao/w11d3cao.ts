interface CarObject {
    doors:number,
    color:string,
    brand:string
}
const carInfo:CarObject = {
    doors:2,
    color:"ref",
    brand:"bmw"
}

console.log(carInfo)
// as HTMLInputElement
const text = document.getElementById("textInput") as HTMLInputElement
const number = document.getElementById("numberInput") as HTMLInputElement
const button:HTMLElement = document.querySelector("button")!
const checkbox = <HTMLInputElement> document.getElementById("checkInput")
button.onclick = ():void => {
   console.log(text.value, number.value, checkbox.value)
    if (checkbox.checked){
        console.log("checkbox checked")
    }
}