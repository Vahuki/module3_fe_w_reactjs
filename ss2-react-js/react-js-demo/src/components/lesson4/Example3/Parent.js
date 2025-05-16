import Child from "./Child";
function Parent() {
  const Data = "Du lieu tu cha"
  return (
    <div>
      <h3>Parent Component</h3>
      <Child data={Data}/>
    </div>
  );
}
export default Parent;