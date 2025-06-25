const form = document.getElementById("cadastroForm");

      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const dados = {
          nome: form.nome.value,
          email: form.email.value,
          telefone: form.telefone.value,
          interesse: form.interesse.value,
          mensagem: form.mensagem.value,
        };

        try {
          await fetch("https://primary-production-91cf.up.railway.app/webhook/imersao", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
          });

          // Redireciona com nome e email na URL
          const query = new URLSearchParams({
            nome: dados.nome,
            email: dados.email,
          });

          window.location.href = "confirmacao.html?" + query.toString();

        } catch (error) {
          alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
        }
      });