import { Router } from "express";
import * as Home from "./home.handler"

const router = Router();
router.get('/landingheader', Home.HeaderLanding)
router.get('/landingitemlist', Home.LandingItemList)


export default router;