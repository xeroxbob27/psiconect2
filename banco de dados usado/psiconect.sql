CREATE DATABASE IF NOT EXISTS psiconect
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;


USE psiconect;

CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  idade INT,
  genero VARCHAR(20),
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE doencas (
  id_doenca INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT
);

CREATE TABLE relatos (
  id_relato INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_doenca INT NOT NULL,
  titulo VARCHAR(100),
  descricao TEXT NOT NULL,
  data_relato DATETIME DEFAULT CURRENT_TIMESTAMP,
  status ENUM('aprovado', 'pendente') DEFAULT 'pendente',
  
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    
  FOREIGN KEY (id_doenca) REFERENCES doencas(id_doenca)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


INSERT INTO doencas (nome, descricao) VALUES
('Depressão', 'Transtorno de humor persistente, caracterizado por tristeza e perda de interesse.'),
('Ansiedade', 'Sensação constante de preocupação, tensão e medo excessivo.'),
('TOC', 'Transtorno obsessivo-compulsivo, caracterizado por pensamentos e comportamentos repetitivos.'),
('Síndrome do Pânico', 'Crises súbitas de medo intenso e sintomas físicos como palpitações.'),
('Alzheimer', 'transtorno neurodegenerativo progressivo que se manifesta pela deterioração cognitiva e da memória'),
('Autismo', 'Transtorno do Espectro do Autismo (TEA) reúne desordens do desenvolvimento neurológico presentes desde o nascimento ou começo da infância'),
('Burnalt', 'Fenômeno ocupacional caracterizado por um estado de exaustão física, emocional e mental decorrente de estresse crônico no ambiente de trabalho'),
('TDAH','Transtorno neuropsiquiátrico que afeta a capacidade de uma pessoa de regular sua atenção e controlar impulsos.');

