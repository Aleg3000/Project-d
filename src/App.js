import MainPage from './Pages/MainPage/MainPage';
import { createContext } from 'react';
import { useState } from 'react';
import HookahPage from './Pages/HookahPage/HookahPage';
import { useMatchMedia } from './hooks/use-match-media';
import MainPageMobile from './Pages/MainPage/MainPageMobile';
import AudiPage from './Pages/AudiPage/AudiPage';
import ThreeDPage from './Pages/ThreeD/ThreeDPage';
import FontPage from './Pages/FontPage/FontPage';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HookahCatalogPage from './Pages/HookahCatalogPage/HookahCatalogPage';

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
      element: <FontPage />
    },
    {
      path: '/audi',
      element: <AudiPage />
    },
  ],
  { basename: "/Project-d" });


  
  return (
    <RouterProvider router={isMobile ? mobileRouter : desktopRouter} />
    // <Routes>
    //       <Route index element={isMobile ? <MainPageMobile /> : <MainPage />} />
    //       <Route path='hookahBrand' element={<HookahPage />} />
    //       <Route path='audi' element={<AudiPage />} />
    //       <Route path='threeD' element={<ThreeDPage />} />
    //       <Route path='font' element={<FontPage />} />
    //       <Route path='hookahCatalog' element={<HookahCatalogPage />} />
    // </Routes>
  );
}

export default App;

