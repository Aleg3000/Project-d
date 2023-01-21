import MainPage from './Pages/MainPage/MainPage';
import { createContext } from 'react';
import { useState } from 'react';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import HookahPage from './Pages/HookahPage/HookahPage';
import { useMatchMedia } from './hooks/use-match-media';
import MainPageMobile from './Pages/MainPage/MainPageMobile';

export const MyContext = createContext(null);

const defaultV =  { 
  currentPage: 'main',
  isProject: false 
}

const pages = {
  test: <ProjectPage />,
  hookah: <HookahPage />,
}

function App() {

  const { isMobile } = useMatchMedia();

  const [context, setContext] = useState(defaultV);
  
  return (
  <MyContext.Provider value={[context, setContext]}>
    <div className="App">
      {context.isProject 
      ?
      pages[context.currentPage]
      :
      isMobile
      ?
      <MainPageMobile />
      :
      <MainPage />
    }
    </div>  
  </MyContext.Provider>
    
  );
}

export default App;

