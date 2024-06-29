import Child from "./childComponent";

export default function Parent(prop) {
  let styles = { color: "red" };
  return (
    <>
      <h1>children</h1>
      <Child s={styles}></Child>
    </>
  );
}
