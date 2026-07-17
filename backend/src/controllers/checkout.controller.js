export async function createCheckout(req, res, next) {
  try {
    // TODO: use square.service.createOrder / createPayment once Square is wired up.
    res.status(501).json({ error: 'Checkout not implemented yet' });
  } catch (err) {
    next(err);
  }
}
