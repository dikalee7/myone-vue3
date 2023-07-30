export interface IFCompanyReq {
  corp_code: string;
}

interface IFResBase {
  status: number;
  statusText: string;
}

export interface IFCompanyRes extends IFResBase {
  data: {
    status: string; //	에러 및 정보 코드	(※메시지 설명 참조)
    message: string; //	에러 및 정보 메시지	(※메시지 설명 참조)
    corp_name: string; //	정식명칭	정식회사명칭
    corp_name_eng: string; //	영문명칭	영문정식회사명칭
    stock_name: string; //	종목명(상장사) 또는 약식명칭(기타법인)	종목명(상장사) 또는 약식명칭(기타법인)
    stock_code: string; //	상장회사인 경우 주식의 종목코드	상장회사의 종목코드(6자리)
    ceo_nm: string; //	대표자명	대표자명
    corp_cls: string; //	법인구분	법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
    jurir_no: string; //	법인등록번호	법인등록번호
    bizr_no: string; //	사업자등록번호	사업자등록번호
    adres: string; //	주소	주소
    hm_url: string; //	홈페이지	홈페이지
    ir_url: string; //	IR홈페이지	IR홈페이지
    phn_no: string; //	전화번호	전화번호
    fax_no: string; //	팩스번호	팩스번호
    induty: string; //_code	업종코드	업종코드
    est_dt: string; //	설립일(YYYYMMDD)	설립일(YYYYMMDD)
    acc_mt: string; //	결산월(MM)	결산월(MM)
  };
}
