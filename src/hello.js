// import React, { useEffect } from "react";

// const Hello = () => {
//   useEffect(() => {
//     void (async () => {
//       const res = await import("./async");
//       console.log(res.default);
//     })();
//   }, []);
//   return <div>hello qzj</div>;
// };

// export default Hello;

export default () => {
  setTimeout(async () => {
    const res = await import("./async");
    console.log(res.default());
  }, 3000);
  return "<div>hello qzj</div>";
};
