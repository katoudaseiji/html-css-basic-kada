const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = "ボタンをクリックされました";
    }, 2000);

});