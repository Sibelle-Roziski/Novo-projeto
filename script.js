    <script>
        /* 
          Lógica e Estilo Dinâmico - Funções em JavaScript
          Autora: Sibelle Larissa Roziski
        */

        // Seleção dos elementos HTML
        const botao = document.querySelector(".botao");
        const mensagem = document.querySelector(".mensagem");
        const container = document.querySelector(".container");

        // Função que altera o conteúdo e o estilo da página
        function mostrarMensagem() {
            // Alteração do texto
            mensagem.textContent = "O primeiro bug de computador da história foi causado por uma mariposa real presa dentro de um relé em 1947! Daí surgiu o termo 'debugging'.";
            
            // Alteração de estilos em tempo real (CSS via JS)
            mensagem.style.color = "#0b8043"; 
            mensagem.style.fontWeight = "600";
            
            // Altera o botão para o estado de concluído
            botao.textContent = "Fato Descoberto!";
            botao.style.backgroundColor = "#0b8043";
            
            // Adiciona uma borda verde de sucesso no container
            container.style.border = "2px solid #0b8043";
        }

        // Evento que dispara a função através do clique no botão
        botao.addEventListener("click", mostrarMensagem);
    </script>
