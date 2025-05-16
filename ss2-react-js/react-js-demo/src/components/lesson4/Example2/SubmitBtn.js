function SubmitBtn(porst) {
  return (
    <div>
      <button type={porst.type} id={porst.id}>
        {porst.label}
      </button>
    </div>
  );
}
export default SubmitBtn;