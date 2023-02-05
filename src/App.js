import MainPage from './Pages/MainPage/MainPage';
import { createContext } from 'react';
import { useState } from 'react';
import HookahPage from './Pages/HookahPage/HookahPage';
import { useMatchMedia } from './hooks/use-match-media';
import MainPageMobile from './Pages/MainPage/MainPageMobile';
import AudiPage from './Pages/AudiPage/AudiPage';
import ThreeDPage from './Pages/ThreeD/ThreeDPage';
import FontPage from './Pages/FontPage/FontPage';
import { Routes, Route } from 'react-router-dom';
import HookahCatalogPage from './Pages/HookahCatalogPage/HookahCatalogPage';

export const MyContext = createContext(null);

const defaultV =  { 
  currentPage: 'main',
  isProject: false 
}

const pages = {
  hookahCatalog: <HookahCatalogPage />,
  hookahBrand: <HookahPage />,
  audi: <AudiPage />,
  threeD: <ThreeDPage />,
  font: <FontPage />,
}

function App() {

  const { isMobile } = useMatchMedia();

  const [context, setContext] = useState(defaultV);
  
  return (
  <MyContext.Provider value={[context, setContext]}>
      {/* {context.isProject 
      ?
      pages[context.currentPage]
      :
      isMobile
      ?
      <MainPageMobile />
      :
      <MainPage />
    } */}
    <Routes>
          <Route index element={isMobile ? <MainPageMobile /> : <MainPage />} />
          <Route path='hookahBrand' element={<HookahPage />} />
          <Route path='audi' element={<AudiPage />} />
          <Route path='threeD' element={<ThreeDPage />} />
          <Route path='font' element={<FontPage />} />
          <Route path='hookahCatalog' element={<HookahCatalogPage />} />
    </Routes>
  </MyContext.Provider>
    
  );
}

export default App;

