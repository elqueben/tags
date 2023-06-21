import './App.css';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Leaderboard from './UI/LB';
import Card from './UI/Card';

function App() {
  return (
    <>
      <Login />
      <Signup />
      <Leaderboard />
    </>
  );
}

export default App;
