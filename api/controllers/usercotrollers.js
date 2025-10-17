import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addRelato = (req, res) => {
  const { nome, email, relato } = req.body;

  if (!nome || !email || !relato)
    return res.status(400).json({ message: "Preencha todos os campos" });

  const q = "INSERT INTO relatos (nome, email, relato) VALUES (?, ?, ?)";
  const values = [nome, email, relato];

  db.query(q, values, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json({ message: "Relato enviado com sucesso!" });
  });
};

export const getRelatos = (_, res) => {
  const q = "SELECT nome, relato FROM relatos ORDER BY RAND() LIMIT 6";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
