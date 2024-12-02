let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botaoinfo = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click",ligarSom)
botaoinfo.addEventListener("click",mostrarModal)
modal.addEventListener("click", esconderModal)

function ligarSom(){
    video.muted = !video.muted
    console.log(video)
}

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

function tocarAudio() {
    audio.play()
}

window.addEventListener("load",tocarAudio)