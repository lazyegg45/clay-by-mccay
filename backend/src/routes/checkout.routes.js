import { Router } from 'express';
import { createCheckout } from '../controllers/checkout.controller.js';

export const checkoutRouter = Router();

checkoutRouter.post('/', createCheckout);
