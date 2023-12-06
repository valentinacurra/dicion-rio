
let caixa1 = document.getElementById("caixa1");
let palavra1 = document.getElementById("palavra1")
let close = document.querySelectorAll(".fechar");
let audio1 = document.getElementById("audio1");
let botao1 = document.getElementById("botao1");

palavra1.addEventListener("click", (e) =>{
  caixa1.style.display = "block";
});


close[0].addEventListener("click", (e) =>{
  caixa1.style.display = "none"
  
})

botao1.addEventListener("mouseover", (e) =>{
  audio1.play();
});

botao1.addEventListener("mouseout", (e) =>{
  audio1.pause();
});

// const caixa1 = document.querySelector("#caixa1")
// const palavra1 = document.querySelector("#palavra1")
// const fechar1 = document.querySelector("#fechar1")

// palavra1.addEventListener("click", (e) =>{
//   caixa1.style.display = "block"
// })

// fechar1.addEventListener("click", (e) =>{
//   caixa1.style.display = "none"
// })



let caixa2 = document.getElementById("caixa2")
let palavra2 = document.getElementById("palavra2")

let audio2 = document.getElementById("audio2")
let botao2 = document.getElementById("botao2")

palavra2.addEventListener("click", (e) =>{
  caixa2.style.display = "block"
})

close[1].addEventListener("click", (e) =>{
  caixa2.style.display = "none"
})

botao2.addEventListener("mouseover", (e) =>{
  audio2.play()
})

botao2.addEventListener("mouseout", (e) =>{
  audio2.pause()
})





let caixa3 = document.getElementById("caixa3")
let palavra3 = document.getElementById("palavra3")

let audio3 = document.getElementById("audio3")
let botao3 = document.getElementById("botao3")

palavra3.addEventListener("click", (e) =>{
  caixa3.style.display = "block"
})

close[2].addEventListener("click", (e) =>{
  caixa3.style.display ="none"
})

botao3.addEventListener("mouseover", (e) =>{
  audio3.play()
})

botao3.addEventListener("mouseout", (e) =>{
  audio3.pause()
})





let caixa4 = document.getElementById("caixa4")
let palavra4 = document.getElementById("palavra4")

let audio4 = document.getElementById("audio4")
let botao4 = document.getElementById("botao4")


palavra4.addEventListener("click", (e) =>{
  caixa4.style.display = "block"
})

close[3].addEventListener("click", (e) =>{
  caixa4.style.display ="none"
})

botao4.addEventListener("mouseover", (e) =>{
  audio4.play()
})

botao4.addEventListener("mouseout", (e) =>{
  audio4.pause()
})






let caixa5 = document.getElementById("caixa5")
let palavra5 = document.getElementById("palavra5")

let audio5 = document.getElementById("audio5")
let botao5 = document.getElementById("botao5")

palavra5.addEventListener("click", (e) =>{
  caixa5.style.display = "block"
})

close[4].addEventListener("click", (e) =>{
  caixa5.style.display ="none"
})

botao5.addEventListener("mouseover", (e) =>{
  audio5.play()
})

botao5.addEventListener("mouseout", (e) =>{
  audio5.pause()
})





let caixa6 = document.getElementById("caixa6")
let palavra6 = document.getElementById("palavra6")

let audio6 = document.getElementById("audio6")
let botao6 = document.getElementById("botao6")

palavra6.addEventListener("click", (e) =>{
  caixa6.style.visibility = "visible"
})

close[5].addEventListener("click", (e) =>{
  caixa6.style.visibility ="hidden"
})

botao6.addEventListener("mouseover", (e) =>{
  audio6.play()
})

botao6.addEventListener("mouseout", (e) =>{
  audio6.pause()
})







let caixa7 = document.getElementById("caixa7")
let palavra7 = document.getElementById("palavra7")

let audio7 = document.getElementById("audio7")
let botao7 = document.getElementById("botao7")

palavra7.addEventListener("click", (e) =>{
  caixa7.style.display = "block"
})

fechar[6].addEventListener("click", (e) =>{
  caixa7.style.display ="none"
})

botao7.addEventListener("mouseover", (e) =>{
  audio7.play()
})

botao7.addEventListener("mouseout", (e) =>{
  audio7.pause()
})




let caixa8 = document.getElementById("caixa8")
let palavra8 = document.getElementById("palavra8")
let audio8 = document.getElementById("audio8")
let botao8 = document.getElementById("botao8")

palavra8.addEventListener("click", (e) =>{
  caixa8.style.display = "block"
})

close[7].addEventListener("click", (e) =>{
  caixa8.style.display ="none"
})

botao8.addEventListener("mouseover", (e) =>{
  audio8.play()
})

botao8.addEventListener("mouseout", (e) =>{
  audio8.pause()
})







let caixa9 = document.getElementById("caixa9")
let palavra9 = document.getElementById("palavra9")

let audio9 = document.getElementById("audio9")
let botao9 = document.getElementById("botao9")

palavra9.addEventListener("click", (e) =>{
  caixa9.style.display = "block"
})

close[8].addEventListener("click", (e) =>{
  caixa9.style.display ="none"
})

botao9.addEventListener("mouseover", (e) =>{
  audio9.play()
})

botao9.addEventListener("mouseout", (e) =>{
  audio9.pause()
})








let caixa10 = document.getElementById("caixa10")
let palavra10 = document.getElementById("palavra10")
let audio10 = document.getElementById("audio10")
let botao10 = document.getElementById("botao10")

palavra10.addEventListener("click", (e) =>{
  caixa10.style.display = "block"
})

fechar[9].addEventListener("click", (e) =>{
  caixa10.style.display ="none"
})

botao10.addEventListener("mouseover", (e) =>{
  audio10.play()
})

botao10.addEventListener("mouseout", (e) =>{
  audio10.pause()
})




let conto = document.getElementById("conto")
let abrir = document.getElementById("abrir-conto")
let fechar = document.getElementById("fechar-conto")

abrir.addEventListener("click", (e) =>{
  conto.style.display = "block"
})

fechar.addEventListener("click", (e) =>{
  conto.style.display = "none"
})