export interface IFActions {
  name: string;
  emnm: string;
  empr: object;
}

export interface IFCtInfo {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  gradient?: string;
  actions?: IFActions[];
}
