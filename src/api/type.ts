/**
 * 요청 메시지 명세
 * numOfRows 한 페이지 결과 수(9999)
 * pageNo	페이지 번호(9999)
 * mem_name_check	발의자 검색구분
 *   1.대표발의 G01
 *   2.1인발의 G02
 *   3.공동발의 G03
 * mem_name	발의자
 * hj_nm	발의자 한자
 */
export interface IFBillInfoReq {
  numOfRows?: number;
  pageNo?: number;
  mem_name_check?: string;
  mem_name?: string;
  hj_nm?: string;
}

export interface IFBillInfoDetail {
  billId: string;
  billName: string;
  billNo: number;
  generalResult: string;
  passGubn: string;
  procDt: string;
  procStageCd: string;
  proposerKind: string;
}

export interface IFResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: [];
      };
    };
  };
}

export interface IFResult<T> {
  status: string;
  statusText: string;
  data: T[];
}
