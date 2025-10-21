import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addRelato = (req, res) => {
  const { nome, email, relato, idDoenca } = req.body;

  if (!email || !relato || !idDoenca) {
    return res.status(400).json({ 
      message: "Preencha todos os campos obrigatórios" 
    });
  }

  const qUsuario = "INSERT INTO usuarios (nome, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE id_usuario=LAST_INSERT_ID(id_usuario)";
  const valuesUsuario = [nome || "Anônimo", email];

  db.query(qUsuario, valuesUsuario, (err, resultUsuario) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json(err);
    }

    const idUsuario = resultUsuario.insertId;

    const qRelato = "INSERT INTO relatos (id_usuario, id_doenca, titulo, descricao) VALUES (?, ?, ?, ?)";
    const valuesRelato = [idUsuario, idDoenca, "Relato", relato];

    db.query(qRelato, valuesRelato, (err) => {
      if (err) {
        console.error("Erro ao inserir relato:", err);
        return res.status(500).json(err);
      }
      return res.status(201).json({ message: "Relato enviado com sucesso!" });
    });
  });
};

export const getRelatos = (_, res) => {
  const q = `
    SELECT 
      u.nome, 
      r.descricao AS relato
    FROM relatos r
    INNER JOIN usuarios u ON r.id_usuario = u.id_usuario
    WHERE r.status = 'aprovado'
    ORDER BY RAND() 
    LIMIT 6
  `;
  
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};


export const getTranstornos = (req, res) => {
  const q = "SELECT * FROM doencas";
  
  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar doenças:", err);
      return res.status(500).json({ error: "Erro ao buscar doenças" });
    }
    return res.status(200).json(data);
  });
};