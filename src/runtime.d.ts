declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $cmn: Record<string, (...args: any) => any>;
  }
}
export {};
