import { LoDashStatic } from 'lodash';
import { IFHeader } from '@/store/modules/headerInfo';

export interface IFCmn {
  /** Description : Page Loading */
  setLoading: (f: boolean) => void;
  setHeader: (o: IFHeader) => void;
}

export interface IFMo {
  /** Description : Page Loading */
  alert: (o: IFConfirmRequset) => Promise<boolean>;
  confirm: (o: IFConfirmRequset) => Promise<boolean>;
}

export interface IFUtils {
  cmn: IFCmn;
  _: LoDashStatic;
  mo: IFMo;
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
