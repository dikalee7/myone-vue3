import useUtils from '@/composables/utils';
import { stockApiCall, dartApiCall } from '@/api/index';
export default function () {
  const { cmn, mo } = useUtils();

  const stockApi = {
    priceList: {
      name: '주식 시세 목록',
      uri: '/GetStockSecuritiesInfoService/getStockPriceInfo',
      method: 'get',
    },
    finaStatInfo: {
      name: '기업 재무 정보',
      uri: '/GetFinaStatInfoService_V2/getSummFinaStat_V2',
      method: 'get',
    },
    stocIssuStat: {
      name: '주식 발행 정보',
      uri: '/GetStocIssuInfoService/getStocIssuStat',
      method: 'get',
    },
    corpInfo: {
      name: '기업 정보',
      uri: '/company.json',
      method: 'get',
    },
  };

  const xmlToJson = (xml: any) => {
    // xml => json 변환 xmlToJson함수
    // Create the return object
    let obj: any = {};

    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    // If all text nodes inside, get concatenated text from them.
    const textNodes = [].slice.call(xml.childNodes).filter(function (node) {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
        return text + node.nodeValue;
      }, '');
    } else if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] == 'undefined') {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == 'undefined') {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }

    return obj;
  };

  return { cmn, mo, stockApi, stockApiCall, dartApiCall, xmlToJson };
}
