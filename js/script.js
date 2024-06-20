document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle-form-link').addEventListener('click', toggleForms);
});

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleFormText = document.getElementById('toggle-form-text');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Entrar';
        toggleFormText.innerHTML = 'Não tem uma conta? <span class="link-like" id="toggle-form-link">Crie uma clicando aqui!</span>';
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.textContent = 'Cadastro';
        submitBtn.textContent = 'Cadastrar';
        toggleFormText.innerHTML = 'Já tem uma conta? <span class="link-like" id="toggle-form-link">Faça Login!</span>';
    }

    document.getElementById('toggle-form-link').addEventListener('click', toggleForms);
}
