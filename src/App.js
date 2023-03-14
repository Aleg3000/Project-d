import { useMatchMedia } from './hooks/useMatchMedia';
import { RouterProvider } from 'react-router-dom';
import { mobileRouter, desktopRouter } from './router/router';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';
import Locker from './Components/Locker/Locker';


function App() {

  const { isMobile } = useMatchMedia();

  const [isLoading, setIsLoading] = useState(true)

  const [isNormal, setIsNormal] = useState(true)

  const checkOrientation = () => {
    // setIsNormal(window.orientation === 90 || window.orientation === -90)
    if (window.orientation === 90 || window.orientation === -90) {
      setIsNormal(false)
    } else {
      setIsNormal(true)
    }
  }

  useEffect(() => {
    window.addEventListener("orientationchange", checkOrientation, false);
    window.addEventListener("resize", checkOrientation, false);

    checkOrientation()

    return () => {
      window.removeEventListener('orientationchange', checkOrientation)
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])
  
  return (
    isLoading
    ?
    <Loader setIsLoading={setIsLoading} />
    :
    isNormal
    ?
    <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />
    :
    <Locker />
    )
}

export default App;
