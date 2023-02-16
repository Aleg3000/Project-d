import { useMatchMedia } from './hooks/useMatchMedia';
import { RouterProvider } from 'react-router-dom';
import { mobileRouter, desktopRouter } from './router/router';
import { useState } from 'react';
import Loader from './Components/Loader/Loader';

function App() {

  const { isMobile } = useMatchMedia();

  const [isLoading, setIsLoading] = useState(true)
  
  return (
    isLoading
    ?
    <Loader setIsLoading={setIsLoading} />
    :
    <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />
    )
}

export default App;
