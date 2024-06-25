const numeroAleatorio = Math.floor(Match.random() * 10) + 1;
const inputGuess = document.getElementById('palpite');
const buttonSubmit = document.getElementById('submit');
const messageDiv = document.getElementById('mensagem');
let tentativas = 0;

function verificarPalpite() {
    const palpite = Number(inputGuess.value);
    tentativas++;

    if (palpite === numeroAleatorio) {
        messageDiv.textContent = 'Parabéns! Você acertou em $(tentativas) tentativa(s)'
        messageDiv.style.color = 'green';
        setTimeout(() => {
            window.location.reload();
        }, 5000)
    } else if (palpite < numeroAleatorio){
        messageDiv.textContent = 'Tente novamente. Você chutou o numero $(palpite)';
        messageDiv.style.color = 'orange';
    }else if (palpite > numeroAleatorio){
        messageDiv.textContent = 'Tente novamente. Você chutou o numero $(palpite)';
        messageDiv.style.color = 'orange';
    }
}

buttonSubmit.addEventListener('click', verificarPalpite);