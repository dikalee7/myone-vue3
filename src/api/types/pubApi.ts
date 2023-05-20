/**
 * 요청 메시지 명세
 * page : page index
 * perPage	: page size
 * returnType : JSON or XML (기본값: JSON)
 */
export interface IFPubServiceReq {
  page?: number;
  perPage?: number;
  returnType?: string;
}

interface IFPublicBase {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  status: number;
  statusText: string;
}

export interface IFPubServiceData {
  부서명: string;
  상세조회URL: string;
  서비스ID: string;
  서비스명: string;
  서비스목적: string;
  선정기준: string;
  소관기관명: string;
  소관기관코드: string;
  신청기한: string;
  신청방법: string;
  조회수: number;
  지원내용: string;
  지원대상: string;
  지원유형: string;
}
export interface IFPubService extends IFPublicBase {
  data: [IFPubServiceData];
}

export interface IFPubServiceDetailData {
  SVC_ID: string;
  지원유형: string;
  서비스명: string;
  서비스목적: string;
  신청기한: string;
  지원대상: string;
  선정기준: string;
  지원내용: string;
  신청방법: string;
  구비서류: string;
  접수기관명: string;
  문의처전화번호: string;
  온라인신청사이트URL: string;
  수정일시: string;
  소관기관명: string;
  행정규칙: string;
  자치법규: string;
  법령: string;
}
export interface IFPubServiceDetail extends IFPublicBase {
  data: [IFPubServiceDetailData];
}

export interface IFSupportConditions extends IFPublicBase {
  SVC_ID: string;
  JA0101: string;
  JA0102: string;
  JA0103: string;
  JA0104: string;
  JA0105: string;
  JA0106: string;
  JA0107: string;
  JA0108: string;
  JA0109: string;
  JA0110: number;
  JA0111: number;
  JA0201: string;
  JA0202: string;
  JA0203: string;
  JA0204: string;
  JA0205: string;
  JA0301: string;
  JA0302: string;
  JA0303: string;
  JA0304: string;
  JA0305: string;
  JA0306: string;
  JA0307: string;
  JA0308: string;
  JA0309: string;
  JA0310: string;
  JA0311: string;
  JA0312: string;
  JA0313: string;
  JA0314: string;
  JA0315: string;
  JA0316: string;
  JA0317: string;
  JA0318: string;
  JA0319: string;
  JA0320: string;
  JA0322: string;
  JA0323: string;
  JA0324: string;
  JA0325: string;
  JA0326: string;
  JA0327: string;
  JA0401: string;
  JA0402: string;
  JA0403: string;
  JA0404: string;
  JA0410: string;
  JA0411: string;
  JA0412: string;
  JA0413: string;
  JA0414: string;
}

export interface IFPublicApiResult<T> {
  status: number;
  statusText: string;
  data: T;
}
