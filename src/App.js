import MainPage from './Pages/MainPage/MainPage';
import HookahPage from './Pages/HookahPage/HookahPage';
import { useMatchMedia } from './hooks/use-match-media';
import MainPageMobile from './Pages/MainPage/MainPageMobile';
import AudiPage from './Pages/AudiPage/AudiPage';
import FontPage from './Pages/FontPage/FontPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HookahCatalogPage from './Pages/HookahCatalogPage/HookahCatalogPage';
import FontPageMobile from './Pages/FontPage/FontPageMobile';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {

  const { isMobile } = useMatchMedia();

  const desktopRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: '/hookahBrand',
      element: <HookahPage />
    },
    {
      path: '/hookahCatalog',
      element: <HookahCatalogPage />
    },
    {
      path: '/font',
      element: <FontPage />
    },
    {
      path: '/audi',
      element: <AudiPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
  ],
  { basename: "/Project-d" });

  const mobileRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPageMobile />,
    },
    {
      path: '/hookahBrand',
      element: <HookahPage />
    },
    {
      path: '/hookahCatalog',
      element: <HookahCatalogPage />
    },
    {
      path: '/font',
      element: <FontPageMobile />
    },
    {
      path: '/audi',
      element: <AudiPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
  ],
  { basename: "/Project-d" });


  
  return <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />
}

export default App;

