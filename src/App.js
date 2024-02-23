import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import RootLayout from './components/RootLayout/RootLayout';
import MyPage from './pages/Mypage/MyPage';

function App() {
  return (
    <>
      <Reset />
      <SideBar />
      <TopBar />
      <RootLayout>
        <Routes>

          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/board' element={<>게시판</>}/>
          <Route path='/notice' element={<>공지사항</>}/>

          <Route path='/introduction' element={<>기관소개</>} />
          <Route path='/curriculum' element={<>교육과정</>} />
          <Route path='/board' element={<>게시판</>} />
          
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;