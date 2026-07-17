import { env } from './src/config/env.js';
import express from 'express';
import cors from 'cors';
import { productsRouter } from './src/routes/products.routes.js';
import { checkoutRouter } from './src/routes/checkout.routes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/products', productsRouter);
app.use('/checkout', checkoutRouter);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Clay by McCay backend listening on port ${env.port}`);
});
