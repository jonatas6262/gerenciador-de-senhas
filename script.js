const sliderElement = document.querySelector("#slider")
const buttonElement = document.querySelector("#button-gerator")

const sizePassword = document.querySelector("#value")
const password = document.querySelector("#password")

const containerPassword = document.querySelector("#container-password")

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {
    sizePassword.innerHTML = this.value
}

const generatePassword = () => {
    let pass = ""
    for (let index = 0, numb = charset.length; index < sliderElement.value; index++) {
        pass += charset.charAt(Math.floor(Math.random() * numb))
    }

    password.innerHTML = pass
    containerPassword.classList.remove("hide")
    newPassword = pass
}

const copyPassword = () => {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(newPassword)
}

buttonElement.addEventListener("click", generatePassword)
password.addEventListener("click", copyPassword)
