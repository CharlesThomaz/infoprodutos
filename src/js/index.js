document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Efeito de loading no botão
        const button = form.querySelector('button');
        const originalButtonText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSANDO...';
        button.disabled = true;

        const dados = {
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value,
            interesse: form.interesse.value,
            mensagem: form.mensagem.value,
        };

        try {
            const response = await fetch("https://primary-production-91cf.up.railway.app/webhook/imersao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            // Efeito de sucesso antes do redirecionamento
            button.innerHTML = '<i class="fas fa-check"></i> SUCESSO!';
            button.style.background = 'linear-gradient(45deg, #00ff88, #00ccff)';
            
            // Redireciona com nome e email na URL após breve delay
            setTimeout(() => {
                const query = new URLSearchParams({
                    nome: dados.nome,
                    email: dados.email,
                });
                window.location.href = "confirmacao.html?" + query.toString();
            }, 1000);

        } catch (error) {
            // Efeito de erro
            button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ERRO! TENTE NOVAMENTE';
            button.style.background = 'linear-gradient(45deg, #ff0000, #ff6600)';
            
            // Restaura o botão após 2 segundos
            setTimeout(() => {
                button.innerHTML = originalButtonText;
                button.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
                button.disabled = false;
            }, 2000);
            
            console.error("Erro ao enviar os dados:", error);
        }
    });

    // Efeitos de hover nos inputs
    const inputs = document.querySelectorAll('.cyber-input-group input, .cyber-input-group select, .cyber-input-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = '#00f0ff';
            this.parentElement.querySelector('i').style.color = '#00f0ff';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = '';
            this.parentElement.querySelector('i').style.color = '';
        });
    });
});