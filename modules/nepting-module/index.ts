// Reexport the native module. On web, it will be resolved to NeptingModule.web.ts
// and on native platforms to NeptingModule.ts
export { default } from './src/NeptingModule';
export { default as NeptingModuleView } from './src/NeptingModuleView';
export * from  './src/NeptingModule.types';
