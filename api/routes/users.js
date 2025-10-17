import express from "express"
import { getUsers, addRelato, getRelatos } from "../controllers/usercotrollers.js"
const router = express.Router()

router.get("/", getUsers)
router.post("/relato", addRelato)
router.get("/relatos", getRelatos)

export default router