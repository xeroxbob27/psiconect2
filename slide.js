var slide = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('slide1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++ 

    if(cont > 3){
        cont = 1
    }

document.getElementById('slide'+cont).checked = true
}