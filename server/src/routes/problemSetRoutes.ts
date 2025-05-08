import { Router } from 'express';
import { getAllProblemSets } from '../controllers/getProblemSets';

const router = Router();


router.get('/problem-sets', getAllProblemSets);

export default router;
