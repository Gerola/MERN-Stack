import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MainPage from './Pages/MainPage'
import HeadingBar from './Components/HeadingBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadingBar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/inventory' element={<MainPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;