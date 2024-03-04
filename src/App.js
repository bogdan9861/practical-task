import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main/Main";
import CardInfo from './pages/CardInfo/CardInfo'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/cardInfo" Component={CardInfo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
