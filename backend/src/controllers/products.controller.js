export async function getProducts(req, res, next) {
  try {
    // TODO: replace with squareService.listCatalogItems() once Square is wired up.
    res.json({ products: [] });
  } catch (err) {
    next(err);
  }
}
