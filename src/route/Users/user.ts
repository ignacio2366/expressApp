import { Router } from "express";
import { getUser, getUserSample, getUserWithId, getUserWithIDQuery } from "./handlers/users.handler";
const router = Router();

// api/users/index site
router.get('/index', getUserWithIDQuery);

// /api/users
router.get('/', getUser);

// /api/users/123
router.get('/:id', getUserWithId);

// /api/users/123?limit
router.get('/:id/', getUserWithIDQuery);

export default router