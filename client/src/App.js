import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Dashboard from './Dashboard';

// To get the code part of the URL after the login

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    // If logged in, i.e. code is there in URL, open Dashboard. Else Login
    code ? <Dashboard/> : <Login/>
  );
}

export default App;
