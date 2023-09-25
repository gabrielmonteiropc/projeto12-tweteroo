import express from 'express';
import cors from 'cors';

//Aplicação servidora
const app = express();

//Configurações
app.use(cors());
app.use(express.json());

//Variáveis globais
const users = [];
const tweets = [];

//Funcões
app.post('/sign-up', (request, response) => {

    const { username, avatar } = request.body;

    const novoUser = { username, avatar };

    users.push(novoUser);

    response.send('ok!');
});

app.post('/tweets', (request, response) => {

    const { username, tweet } = request.body;

    const usuarioCadastrado = users.find(user => user.username === username);

    if (!usuarioCadastrado) {
        return response.send("UNAUTHORIZED")
    };

    // Aqui adiciona o Tweet
    tweets.push({ username, tweet });

    response.send('Ok!');

});

app.get("/test", (request, response) => {
    response.send("Tudo ok");
})

//Executando a aplicação servidora para requisições na porta 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Funcionando porta ${PORT}`));