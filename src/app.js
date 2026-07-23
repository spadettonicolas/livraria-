import express from "express";
import conectaDatabase from "./config/dbConect.js";
import livro from "./models/Livro.js";
import routes from "./routes/livrosRoutes.js";


const conexao = await conectaDatabase();
conexao.on("error", (erro) => {
    console.error("erro de conexão ", erro )
});

conexao.once("open",() => {
    console.log("conexão com o banco feita ");
})

const app = express();
app.use(express.json());
app.use(routes);


app.get("/", (req, res) => {
    res.status(200).send("livraria");
});


app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
}); 

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro criado");
});

app.put("/livros/:id",(req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

app.delete("/livros/:id",(req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro deletado")
})
export default app;

//mongodb+srv://admin:<db_password>@cluster0.uluq17o.mongodb.net/?appName=Cluster0