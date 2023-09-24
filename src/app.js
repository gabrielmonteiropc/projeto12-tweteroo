import express from 'express';

//Aplicação servidora
const app = express();

//Configurações
app.use(cors);
app.use(express.json());

//Executando a aplicação servidora para requisições na porta 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Funcionando porta ${PORT}`));