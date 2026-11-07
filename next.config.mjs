const base = process.env.BASE_PATH ?? '';
export default {
  output: 'export',
  basePath: base,
  assetPrefix: base || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE: base }
};
