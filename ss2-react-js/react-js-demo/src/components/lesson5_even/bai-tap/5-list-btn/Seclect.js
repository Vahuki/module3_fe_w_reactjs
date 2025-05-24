import ProductSelect from "./ProductSelect";

const Seclect = () => {
  const handleSelect = (code) => {
        const greeting = {
            ip: "This Iphone ",
            im: "this Imac",
            aw: "This Apple Watch",
        };
        // const code = e.target.value;
        console.log(greeting[code]);
    }
  return (
    <div>
      <ProductSelect onSelect = {handleSelect}/>
    </div>
  );
}
export default Seclect;