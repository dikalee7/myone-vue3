export interface IFStockPriceReq {
  numOfRows?: number; //	한 페이지 결과 수
  pageNo?: number; //	페이지 번호
  basDt?: string; //	기준일자
  beginBasDt?: string; //	기준일자
  endBasDt?: string; //	기준일자
  likeBasDt?: string; //	기준일자
  likeSrtnCd?: string; //	단축코드
  isinCd?: string; //	ISIN코드
  likeIsinCd?: string; //	ISIN코드
  itmsNm?: string; //	종목명
  likeItmsNm?: string; //	종목명
  mrktCls?: string; //	시장구분
  beginVs?: string; //	대비
  endVs?: string; //	대비
  beginFltRt?: string; //	등락률
  endFltRt?: string; //	등락률
  beginTrqu?: string; //	거래량
  endTrqu?: string; //	거래량
  beginTrPrc?: string; //	거래대금
  endTrPrc?: string; //	거래대금
  beginLstgStCnt?: string; //	상장주식수
  endLstgStCnt?: string; //	상장주식수
  beginMrktTotAmt?: string; //	시가총액
  endMrktTotAmt?: string; //	시가총액
}

interface IFStockBase {
  numvOfRows: number;
  pageNo: number;
  totalCount: number;
  resultCode: string;
  resultMsg: string;
  status: number;
  statusText: string;
}

export interface IFStockServiceData {
  basDt: string; //기준일자
  srtnCd: string; //단축코드
  isinCd: string; //ISIN코드
  itmsNm: string; //종목명
  mrktCtg: string; //시장구분
  clpr: string; //종가
  vs: string; //대비
  fltRt: string; //등락률
  mkp: string; //시가
  hipr: string; //고가
  lopr: string; //저가
  trqu: string; //거래량
  trPrc: string; //거래대금
  lstgStCnt: string; //상장주식수
  mrktTotAmt: string; //시가총액
}
export interface IFStockService extends IFStockBase {
  items: [IFStockServiceData];
}
