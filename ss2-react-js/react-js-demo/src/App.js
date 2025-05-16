// import logo from './logo.svg';
import './App.css';
import FormRegister from './components/lesson4/Example2/FormRegister';
import Age from './components/lesson4/Example3/Age';
import Greeting from './components/lesson4/Example3/Greeting';
import Hello from './components/lesson4/Example3/Hello';
import LoginStatus from './components/lesson4/Example3/LoginStatus';
import Parent from './components/lesson4/Example3/Parent';
import PostList from './components/lesson4/Example3/PostList';
import TheName from './components/lesson4/Example3/TheName';
import SearchBar from './components/lesson4/Example3/SearchBar';
import Alert from './components/lesson4/Example3/Alert';
import Navbar from './components/lesson4/Example3/Navbar';

function App() {
  const myStyle = {
    color: 'red',
    backgroundColor: 'lightgray',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px'
  };
  const link = ["Home", "About", "Contact"];
  const styleNavbar = {
    backgroundColor: 'lightblue',
    padding: '10px',
    display: 'flex',
    borderRadius: '5px'
  };
  return (
    <>
      <Navbar link={link} style={styleNavbar}/>
      <h1 style={myStyle}>Bài tập Component Prop</h1>
      <Hello />
      <ul>
        <li><TheName name="Kien" /></li>
        <li><Age age="21" /></li>
        <li><Greeting message="xin chao" /></li>
        <li><Parent /></li>
        <li><LoginStatus isLoggedIn={false} /></li>
      </ul>
      <PostList />
      <SearchBar />
      <Alert type="success" message="Thành công!" />
      <Alert type="warning" message="Cảnh báo!" />
      <Alert type="error" message="Có lỗi xảy ra!" />

      <FormRegister />
    </>
  )
}

export default App;
