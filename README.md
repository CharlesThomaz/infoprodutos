# 🚀 Mestre do HTML

Projeto de site estático com uma **super aula gratuita** e um **formulário para lista de espera** da Imersão Mestre do HTML. Desenvolvido com HTML, CSS e JavaScript, e empacotado com Docker usando NGINX.

---

## 📁 Estrutura do Projeto

```
mestreDoHtml/
│
├── src/
│   ├── index.html       # Página principal com super aula e formulário
│   ├── css/             # Estilos personalizados
│   └── js/              # Scripts JavaScript
│
├── Dockerfile           # Para gerar a imagem Docker
├── package.json         # (opcional, se estiver usando)
└── README.md            # Este arquivo
```

---

## 🐳 Como Executar com Docker

### 1. Construir a imagem Docker:

```bash
docker build -t mestre-html .
```

### 2. Rodar o container:

```bash
docker run -d -p 8080:80 --name mestre-html-container mestre-html
```

### 3. Acessar no navegador:

```
http://localhost:8080
```

---

## 🧠 Funcionalidades

- ✅ Super aula em vídeo integrada via `<iframe>`
- ✅ Formulário de inscrição com validação de e-mail e telefone
- ✅ Layout limpo e direto ao ponto
- ✅ Deploy rápido com Docker + NGINX

---

## ✍️ Autor

**CHARLAO**  
📷 [Instagram](https://instagram.com/seuperfil)  
💼 [LinkedIn](https://linkedin.com/in/seuperfil)

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
