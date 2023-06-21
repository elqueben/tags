import './App.css';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Leaderboard from './UI/LB';
import Card from './UI/Card';
import Profile from './UI/Profile';

function App() {
  return (
    <>
      <Login />
      <Signup />
      <Leaderboard />
      <Card />
      <Profile />
    </>
  );
}

export default App;
