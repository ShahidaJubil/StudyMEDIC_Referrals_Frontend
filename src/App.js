
import './App.css';
import Navigate from './Navigation/Navigate.jsx'
import { AuthProvider } from './context/AuthProvide';

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Navigate/>
      </AuthProvider>
    </div>
  );
}

export default App;
