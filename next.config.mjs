/** @type {import('next').NextConfig} */
const nextConfig = {

  // to build statically
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  }

};

export default nextConfig;
