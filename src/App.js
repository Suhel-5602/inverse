// import logo from './logo.svg';
import './App.css';
import Studentform from './components/Student form/Studentform';
// import kan from './kan.png';

function NavBar() {
  return <h1>This is NavBar components</h1>;
}
function Banner() {
  return <h1>This is Banner components</h1>
}
function About() {
  return <h1>This is About components</h1>
}
function Footer() {
  return <h1>This is Footer components</h1>
}
function GreetUser(props) {
  return(
  <div>
    <h1>welcome {props.name} </h1>
    <h1>Your email is {props.email} </h1>
    <h1>semester is {props.semester} </h1>
    <h1>branch is {props.branch} </h1>
    <Studentform></Studentform>

  </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <Banner></Banner>
      <Footer></Footer>
      <About></About>
      <Banner></Banner>
      <GreetUser name="Suhel" email="Suhel@gmail.com" semester="4" branch="computer Science engg"></GreetUser> 

    </div>
  )
}

export default App;
