import { Router } from 'express';
import { getBarChartScores } from '../controllers/getBarChartScores';
import { getAllScores } from '../controllers/getAllScoresController';
import { postScore } from '../controllers/postScores';

const router = Router();
router.get('/bar-chart-scores', getBarChartScores);
router.get('/all-scores', getAllScores);
router.post('/post-score', postScore);

export default router;


