function validaLogin(event){
    event.preventDefault() // evita o recarregamento da página

    //obtendo os valores digitados nos campos
    let email = btoa(document.getElementById('email').value)
    let senha = btoa(document.getElementById('senha').value)
    
    if(!email || !senha){
        alert('É obrigatório informar o email e a senha!')
        return
    }
    //mostrando os valores obtidos na console
    //console.log(`O usuário é ${email} e a senha é ${senha}`)    
    if (email === 'ZGpAZ21haWwuY29t' && senha === 'MTIzNDU='){
        //carrega a página principal
        window.location.href = "CadPets.html"       
    } else {
        alert('O usuário ou senha informados são inválidos!')
    }
}