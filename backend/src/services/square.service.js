// Square API integration lives here once wired up.
// npm install square (official SDK), then initialize a client using
// env.squareAccessToken / env.squareEnvironment from ../config/env.js.

export async function listCatalogItems() {
  throw new Error('Not implemented: square.service.listCatalogItems');
}

export async function createOrder(_cartItems) {
  throw new Error('Not implemented: square.service.createOrder');
}

export async function createPayment(_orderId, _sourceId) {
  throw new Error('Not implemented: square.service.createPayment');
}
