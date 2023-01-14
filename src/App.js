import MainPage from './Pages/MainPage/MainPage';
import { createContext } from 'react';
import { useState } from 'react';
import ProjectPage from './Pages/ProjectPage/ProjectPage';

export const MyContext = createContext(null);

const defaultV =  { position: {
  top: 0,
  left: 0,
},
isProject: false 
}

function App() {

  const [context, setContext] = useState(defaultV);
  
  return (
  <MyContext.Provider value={[context, setContext]}>
    <div className="App">
      {context.isProject 
      ?
      <ProjectPage />
      :
      <MainPage />
    }
      {/* <MainPage />
      {context.isProject && <ProjectPage></ProjectPage>} */}
    </div>  
  </MyContext.Provider>
    
  );
}

export default App;

