document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    let button = document.getElementById('buttonId');
    let text = document.getElementById('textId'); 
    let qrImage = document.getElementById('qrImage');
    let imgBox = document.getElementById('imgBox'); 

    button.addEventListener('click', function() {
        qrGenerator();
    });

    function qrGenerator() {
        if(text.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
        imgBox.classList.add('show-img');
    } else {
        text.classList.add('error');
    }
}
});
