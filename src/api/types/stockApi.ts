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

export interface IFStockFinaStatReq {
  numOfRows?: number; //	한 페이지 결과 수
  pageNo?: number; //	페이지 번호
  crno: string; //	법인등록번호
  bizYear?: string; //사업연도
}

export interface IFCorpBasicInfoReq {
  numOfRows?: number; //	한 페이지 결과 수
  pageNo?: number; //	페이지 번호
  crno?: string; //	법인등록번호
  corpNm: string; // 법인명
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

export interface IFCorpBasicData {
  crno: string; //법인등록번호
  corpNm: string; //법인명
  corpEnsnNm: string; //법인영문명
  enpPbanCmpyNm: string; //기업공시회사명
  enpRprFnm: string; //기업대표자성명
  corpRegMrktDcd: string; //법인등록시장구분코드
  corpRegMrktDcdNm: string; //법인등록시장구분코드명
  corpDcd: string; //법인구분코드
  corpDcdNm: string; //법인구분코드명
  bzno: string; //사업자등록번호
  enpOzpno: string; //기업구우편번호
  enpBsadr: string; //기업기본주소
  enpDtadr: string; //기업상세주소
  enpHmpgUrl: string; //기업홈페이지URL
  enpTlno: string; //기업전화번호
  enpFxno: string; //기업팩스번호
  sicNm: string; //표준산업분류명
  enpEstbDt: string; //기업설립일자
  enpStacMm: string; //기업결산월
  enpXchgLstgDt: string; //기업거래소상장일자
  enpXchgLstgAbolDt: string; //기업거래소상장폐지일자
  enpKosdaqLstgDt: string; //기업코스닥상장일자
  enpKosdaqLstgAbolDt: string; //기업코스닥상장폐지일자
  enpKrxLstgDt: string; //기업KONEX상장일자
  enpKrxLstgAbolD: string; //기업KONEX상장폐지일자
  smenpYn: string; //중소기업여부
  enpMntrBnkNm: string; //기업주거래은행명
  enpEmpeCnt: string; //기업종업원수
  empeAvgCnwkTermCtt: string; //종업원평균근속기간내용
  enpPn1AvgSlryAmt: string; //기업1인평균급여금액
  actnAudpnNm: string; //회계감사인명
  audtRptOpnnCtt: string; //감사보고서의견내용
  enpMainBizNm: string; //기업주요사업명
  fssCorpUnqNo: string; //금융감독원법인고유번호
  fssCorpChgDtm: string; //금융감독원법인변경일시
  fstOpegDt: string; //최초개방일자
  lastOpegDt: string; //최종개방일자
}

export interface IFCorpBasicService extends IFStockBase {
  items: { item: [IFCorpBasicData] };
}

export interface IFStocIssuInfoReq {
  numOfRows?: number; //	한 페이지 결과 수
  pageNo?: number; //	페이지 번호
  basDt?: string; // 기준일자
  crno?: string; //	법인등록번호
  stckIssuCmpyNm: string; // 주식발행회사명
}

export interface IFCorpCode {
  corp_code: string;
  corp_name: string;
  stock_code: string;
  modify_date: string;
}
