import { useMatchMedia } from './hooks/use-match-media';
import { RouterProvider } from 'react-router-dom';
import { mobileRouter, desktopRouter } from './router/router';

function App() {

  const { isMobile } = useMatchMedia();
  
  return <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />
}

export default App;
