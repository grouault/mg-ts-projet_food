declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.png" {
  const value: any;
  export default value;
}