import { Router } from "express";
import * as Home from "./home.handler"

const router = Router();
router.get('/headerlanding', Home.HeaderLanding)

export default router;