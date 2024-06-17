let login = '', senha, qtdHA = 0, totalCompraHA = 0, valor = 0, totalGeral = 0
let cesta, qtdThor = 0, totalCompraThor = 0, qtdHulk = 0, totalCompraHulk = 0
let qtdhf = 0, totalCompraHF = 0, qtdCA = 0, totalCompraCA = 0, qtdCM = 0, totalCompraCM = 0

function abreTelaLogin(){
    login = prompt("Digite seu username: ")
    senha = prompt("Digite sua senha: ")
    document.getElementById("log").innerHTML = `Bem vindo, ${login}`
}

function compraHA(){
    qtdHA = parseInt(document.getElementById("qtd-1").value)
    totalCompraHA = qtdHA * parseFloat(document.getElementById("ha").innerText.replace(",", "."))

}
function compraThor(){
    qtdThor = parseInt(document.getElementById("qtd-2").value)
    totalCompraThor = qtdThor * parseFloat(document.getElementById("th").innerText.replace(",", "."))

}
function compraHulk(){
    qtdHulk = parseInt(document.getElementById("qtd-3").value)
    totalCompraHulk = qtdHulk * parseFloat(document.getElementById("hu").innerText.replace(",", "."))

}
function compraFerro(){
    qtdhf = parseInt(document.getElementById("qtd-4").value)
    totalCompraHF = qtdhf * parseFloat(document.getElementById("hf").innerText.replace(",", "."))

}
function compraCapitao(){
    qtdCA = parseInt(document.getElementById("qtd-5").value)
    totalCompraCA = qtdCA * parseFloat(document.getElementById("ca").innerText.replace(",", "."))

}
function compraCapita(){
    qtdCM = parseInt(document.getElementById("qtd-6").value)
    totalCompraCM = qtdCM * parseFloat(document.getElementById("cm").innerText.replace(",", "."))

}

function calculaCesta(){
    if(login != ''){
    alert(`
    ${qtdHA} X Boneco Homem-Aranha R$${totalCompraHA.toFixed(2)}
    ${qtdThor} X Boneco Thor R$${totalCompraThor.toFixed(2)}
    ${qtdHulk} X Boneco Hulk R$${totalCompraHulk.toFixed(2)}
    ${qtdhf} X Boneco Homem de Ferro R$${totalCompraHF.toFixed(2)}
    ${qtdCA} X Boneco Capitão America R$${totalCompraCA.toFixed(2)}
    ${qtdCM} X Boneco Capitã Marvel R$${totalCompraCM.toFixed(2)}
    ____________________________________________________________
    Total da Compra                 R$${(totalCompraHA + totalCompraThor + totalCompraHulk + totalCompraHF + totalCompraCA + totalCompraCM).toFixed(2)}
        `)
    } else{
        alert("Você não está logado")
    }
}