export interface IFMo {
  modal(str: string): void;
}
export default function (): IFMo {
  const modal = (str: string) => {
    console.log('modal', str);
  };
  return { modal };
}
