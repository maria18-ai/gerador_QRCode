// Variaveis para controle do DOM
const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#btn');
const qrCodeInput = document.querySelector('#qr_form input');
const qrCodeImg = document.querySelector('#img');

// Função para gerar o qrCode 
function generaterQrCode() {
    // Verificando se o input de texto não está vazio
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) return;

    // Utilizando uma API para gerar o qrCode desejado
    qrCodeBtn.innerHTML = `Gerando código...`
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    // Adicionando o evento load para a imagem do qrCode
    qrCodeImg.addEventListener('load', () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = `Código criado!`
    })
}

// Adicionado evento Click ao botão para ativar a função
qrCodeBtn.addEventListener("click", () => {
    generaterQrCode();
});

// Eveto para gerar o qrCode desejado pela tecla Enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generaterQrCode();
    }
});

// Limpar area do QRcode 
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = `Gerar QR Code`
    }
})