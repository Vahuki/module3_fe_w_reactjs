function Ex5() {
  const listName = [
    {id: 1, title: 'Nguyễn Văn A'},
    {id: 2, title: 'Nguyễn Văn B'},
    {id: 3, title: 'Nguyễn Văn C'},
  ];  
  const listName2 = listName.map(value => <li key={value.id}>{value.title}</li>);
  return (
    <div>
        <h4>Bai 5: </h4>
        <p>Danh sách tên:</p>
        {listName2}
    </div>
  );
}
export default Ex5;