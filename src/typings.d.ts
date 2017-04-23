/// <reference types="node" />

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface Tweet {
  id_str: string;
  intensity: number;
  text: string;
}
