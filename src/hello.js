export default () => {
  setTimeout(async () => {
    const res = await import("./async");
    console.log(res.default());
  }, 3000);
  return "<div>hello qzj</div>";
};
