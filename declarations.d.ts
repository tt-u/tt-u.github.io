declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.ico";
declare module "*.png" {
  const value: string;
  export default value;
}