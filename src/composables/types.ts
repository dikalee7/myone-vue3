import { LoDashStatic } from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';

export interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  setHeader: (o: IFHeader) => void;
}

export interface IFMo {
  /** Description : Page Loading */
  alert: (o: IFConfirmRequset) => Promise<unknown>;
  confirm: (o: IFConfirmRequset) => Promise<unknown>;
}

export interface IFUtils {
  cmn: IFCmn;
  _: LoDashStatic;
  useMo: () => IFMo;
}

export interface IFConfirmOptions {
  color?: string;
  width?: number;
  zIndex?: number;
  noconfirm?: boolean;
}

export interface IFConfirmRequset {
  title: string;
  message: string;
  options?: IFConfirmOptions;
}
