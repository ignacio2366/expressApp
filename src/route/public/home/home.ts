import { Router } from "express";
import * as Home from "./home.handler"

const router = Router();
router.get('/header', Home.HomeHeader)
router.get('/newcollections', Home.HomeNewsCollections)


export default router;