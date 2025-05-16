import Parent from "./Parent";

function Child(prop) {
  return (
    <div>
      <p>{prop.data}</p>
    </div>
  );
}
export default Child;