// Importa o módulo HTTP utilizando a sintaxe 'import'
import http from "http";

// Define a porta do servidor, utilizando a variável de ambiente PORT ou padrão 3000
const port = process.env.PORT || 3000;

// Cria um servidor HTTP que escuta as requisições e responde com "Hello World!"
const server = http.createServer((req, res) => {
  // Configura o cabeçalho da resposta com o código de status 200 (OK) e o tipo de conteúdo "text/plain"
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Envia a resposta "Hello World!" para o cliente e encerra a conexão
  res.end("Hello world!");
});

// O servidor escuta na porta especificada e exibe uma mensagem no console quando está pronto
server.listen(port, () =>
  console.log(
    `Server started on port ${port};` + " press Ctrl-C to terminate..."
  )
);
