/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/signin",
//         permanent: true,
//       },
//     ];
//   },
// };
