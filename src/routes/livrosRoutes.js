import express from "express";
import LivroController from "../controllers/livrosController.js";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", livroController.listarLivros)
  .get("/livros/busca", livroController.listaLivroPorEditora)
  .get("/livros/:id", livroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", livroController.atualizarLivro)
  .delete("/livros/:id", livroController.excluirLivro);

export default router;
