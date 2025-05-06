import { Router } from 'express';
import { getAllScoreCounts, getAllScores } from '../controllers/scoreController';

const router = Router();
router.get('/score-counts', getAllScoreCounts);
router.get('/all-scores', getAllScores);

export default router;


