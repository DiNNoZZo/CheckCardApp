import { Router } from 'express';
import { getBaseMessage } from '../controllers/home.controller';
import basicAuth from '../middlewares/basicAuth';
import { checkCard } from '../controllers/card.controller';
import { isAuthenticated } from '../controllers/authenticated';
import { getPidLocations } from '../controllers/pidLocations';

const router = Router();

router.get('/home', getBaseMessage);
router.get('/pidLocations', getPidLocations);
router.get('/isAuthenticated', basicAuth, isAuthenticated);
router.get('/card/:cardNumber', basicAuth, checkCard);
export default router;
