interface IFStrUtil {
  /** Description : JSON Object to Query String */
  queryString: (o: object) => string;
  testStr: (s: string) => void;
}

const stringUtils: IFStrUtil = {
  queryString: (o: object) => {
    return Object.entries(o)
      .map((e) => e.join('='))
      .join('&');
  },
  testStr: (s: string) => {
    console.log('testtesttest', s);
  },
};

export { stringUtils, IFStrUtil };
