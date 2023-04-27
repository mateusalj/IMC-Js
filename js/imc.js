const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const butao = document.querySelector('#btn')
const imcfinal = document.querySelector('#imc')
const resultado = document.querySelector('#resultado')

butao.addEventListener('click',()=>{
    event.preventDefault()
    if(peso.value!=='' && altura.value!=='' && nome.value!==''){
        let imc = peso.value/(altura.value**2)

        

        imcfinal.value = imc.toFixed(2) //tofixed arrendondando as casas decimais para 2 casas

    }else{
        resultado.innerHTML =  ('Preencha os dados corretamente !! ')
    }
})