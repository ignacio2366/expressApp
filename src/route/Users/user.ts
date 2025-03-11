import { Router } from "express";
import * as User from "./handlers/users.handler";
const router = Router();

// api/users/index site
router.get('/index', User.getUserWithIDQuery);

// /api/users
router.get('/', User.getUser);

// /api/users/123
router.get('/:id', User.getUserWithId);

// /api/users/123?limit
router.get('/:id/', User.getUserWithIDQuery);

export default router