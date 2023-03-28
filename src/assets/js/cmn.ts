export const queryString = (p: object) => {
  return Object.entries(p)
    .map((e) => e.join('='))
    .join('&');
};
// export default {
//   cmnTest: () => {
//     console.log('cmnTest');
//   },
//   queryString: (p: object) => {
//     return Object.entries(p)
//       .map((e) => e.join('='))
//       .join('&');
//   },
// };
