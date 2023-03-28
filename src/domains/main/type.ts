/*
요청 메시지 명세
numOfRows	한 페이지 결과 수(9999)
pageNo	페이지 번호(9999)
mem_name_check	발의자 검색구분
  1.대표발의 G01
  2.1인발의 G02 
  3.공동발의 G03
mem_name	발의자
*/
export interface IFBillInfo {
  numOfRows: number;
  pageNo: number;
  mem_name_check: string;
  mem_name: string;
}
