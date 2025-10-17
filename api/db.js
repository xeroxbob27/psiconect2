import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9230gui**",
    database: "crud",
})


// export const db = mysql.createConnection({
//   host: "mysql-fatec-lopes.mysql.database.azure.com", // substitua pelo nome do servidor
//   user: "glopes@186.249.40.252", // substitua pelo seu usuário
//   password: "9230gui!@#", // sua senha do Azure
//   database: "crud", // nome do banco
//   port: 3306,
//   ssl: {
//     rejectUnauthorized: true // importante para conexão segura
//   }
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Erro ao conectar ao banco:", err);
//     return;
//   }
//   console.log("Conexão com o MySQL no Azure estabelecida com sucesso!");
// });
