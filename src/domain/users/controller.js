const db = require("../../db");
//const md5 =require("md5");

async function getUsers(request, response) {
  const res = await db.query("SELECT * FROM users");
  response.send(res.rows);
}

async function post(request, response) {
  const newUser = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    address: request.body.address,
  };

  const res = await db.query(
    "INSERT INTO users(name, email, password, address) VALUES ($1, $2, $3, $4)",
    [
      request.body.name,
      request.body.email,
      request.body.password,
      request.body.address,
    ]
  );

  response.send({
    newUser: newUser,
  });
}

async function auth(request, response) {
  const res = await db.query(
    "SELECT * FROM users WHERE email=$1 and password=$2",
    [request.body.email, request.body.password]
  );
  
  if (res.rows.length == 0) {
    response.status(404).send({ error: true });
  } else {
    response.send(res.rows[0]);
  }
}

module.exports = {
  getUsers,
  post,
  auth,
};
