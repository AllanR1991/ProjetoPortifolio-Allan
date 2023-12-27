// const elementoNome = document.getElementById('input-nome');
// const elementoEmail = document.getElementById('input-email');
const elementoAssunto = document.getElementById('input-assunto');
const elementoMensagem = document.getElementById('input-mensagem');
const elementoForm = document.querySelector('.formulario__contato');
const elementoEnviar = document.querySelector('.contato__botao')


elementoForm.addEventListener('subimit', 
    (e) => {
        e.preventDefault();
    }
);

elementoEnviar.addEventListener('click',
    enviarEmail
)

function enviarEmail() {
    debugger
    // nome = elementoNome.value;
    // email = elementoEmail.value;
    assunto = elementoAssunto.value;
    mensagem = elementoMensagem.value;
    const dadosDoFormulario = `subject=${assunto}&body=${mensagem}`;
    const linkMailto = `mailto:allanrodrigues1991.ar@gmail.com?${dadosDoFormulario}`;

    elementoForm.setAttribute('action', linkMailto);
}



