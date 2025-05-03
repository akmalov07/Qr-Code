const qrCodeForm = document.querySelector(".qr-code-form");
const qrCodeInput = document.querySelector(".qr-code-input");
const qrCodeShow = document.querySelector(".qr-code-show");
const colorqr = document.querySelector('.color-qr')
const colorqr1 = document.querySelector('.color-qr1')

let qrcode;

qrCodeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    qrCodeShow.innerHTML = ""
    qrcode = new QRCode(qrCodeShow, {
        text: qrCodeInput.value,
        width: 200,
        height: 200,
        colorDark: colorqr.value,
        colorLight: colorqr1.value,
        correctLevel: QRCode.CorrectLevel.H,
        });

});
