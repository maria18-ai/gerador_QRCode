const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#btn');
const qrCodeInput = document.querySelector('#qr_form input');
const qrCodeImg = document.querySelector('#img');

// eventos 
function generaterQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = `Gerando código...`
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = `Código criado!`
    })
}

qrCodeBtn.addEventListener("click", () => {
    generaterQrCode();
});

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