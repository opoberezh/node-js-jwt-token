import pkg from "jsonwebtoken";
import jwt from "jsonwebtoken"
const { sign } = pkg;
import { jwtSecretKey, refreshTokenSecretKey } from "../../config/index.js";
import { token } from "morgan";
// reqiure ("dotenv").config()
//  для попередніх вурсій node.js

// const {jwtSecretKey} = process.env;
const payload = {
  id: '655777299d79cb74e1fba1c3'
}
const webtoken = jwt.sign(payload, jwtSecretKey, {expiresIn: "23"});
console.log(webtoken);
const decodeToken = jwt.decode(webtoken)
console.log(decodeToken)
try {
  const {id} = jwt.verify(token, jwtSecretKey)
  console.lohg(id);
  const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTc3NzI5OWQ3OWNiNzRlMWZiYTFjMyIsImlhdCI6MTcwMDI0MTcwNCwiZXhwIjoxNzAwMjQxNzA0fQ.297ro9jFHudhtQxQ9PXlVo2lA63l5A2BC2fWsocSlvI"
  const result = jwt.verify(invalidToken, jwtSecretKey)
} catch (error) {
  console.log(error.massege)
}

export function signAccessToken(userId) {
  const accessToken = sign({ _id: userId }, jwtSecretKey, {
    expiresIn: "1h",
  });

  return accessToken;
}

export function signRefreshToken(userId) {
  const refreshToken = sign({ _id: userId }, refreshTokenSecretKey, {
    expiresIn: "7d",
  });
  return refreshToken;
}
export function signConfirmCodeToken(userId, confirmCode) {
  const confirmCodeToken = sign(
    { _id: userId, code: confirmCode },
    jwtSecretKey,
    {
      expiresIn: "5m",
    }
  );
  return confirmCodeToken;
}
