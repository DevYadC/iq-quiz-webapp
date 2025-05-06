import { Router } from 'express';
import { getAllProblemSets } from '../controllers/problemSetController';

const router = Router();

// GET /api/problem-sets
router.get('/problem-sets', getAllProblemSets);

export default router;
