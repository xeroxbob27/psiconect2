import express from "express"
import {
    getUsers,
    addRelato,
    getRelatos,
    getTranstornos
} from "../controllers/usercotrollers.js"

const router = express.Router()

router.get("/", getUsers)
router.post("/relato", addRelato)
router.get("/relatos", getRelatos)
router.get("/transtornos", getTranstornos)

export default router