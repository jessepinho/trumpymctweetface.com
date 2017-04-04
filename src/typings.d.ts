/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Tweet {
  id_str: string;
  text: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}
