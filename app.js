let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector(".result")

    if(height ==="" || height <= 0 || isNaN(height)){
        result.innerText = "Please Enter a valid height"
    }else if(weight === "" || weight <= 0 || isNaN(weight)){
        result.innerText = "Please Enter a valid weight"
    }else{
        const bmi = ((weight/(height*height))*10000).toFixed(2)

        result.innerText = bmi
    }
})
let drkMod = document.querySelector(".Black")

drkMod.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark")
     if(document.documentElement.classList.contains("dark")){
        drkMod.innerText = "Light"
     }else{
        drkMod.innerText ="Dark"
     }
})