import { app } from "./server";
import { Router } from "express";

const routes = Router()

routes.get('/', (req, res) => {
  const users = [
    { name: 'eurico', idade: 22 },
    { name: 'chicão', idade: 18 },
    { name: 'itao', idade: 25 }

  ]
  return res.json(users)
})
export { routes }
