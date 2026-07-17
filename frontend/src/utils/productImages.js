const modules = import.meta.glob('../assets/images/product-images/*.png', {
  eager: true,
  import: 'default',
});

const imagesByFilename = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop(), url])
);

export function getProductImage(filename) {
  return imagesByFilename[filename];
}
