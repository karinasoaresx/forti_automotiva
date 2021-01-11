//importa o app
const app = require("./app");

//porta do servidor http
const PORT = 3333;

//declaração da porta tem que ser a última linha do código
app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta ${PORT}`);
});