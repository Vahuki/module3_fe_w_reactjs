function ImgChild({lable , ...end}) {
  return (
    <div>
      <button onClick={() => end.onClick(lable)}>
        {lable}
      </button>
    </div>
  );
}
export default ImgChild;