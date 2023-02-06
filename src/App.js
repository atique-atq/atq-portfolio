import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { allProjectsData } from './components/Projects/allProjectsData'
import ProjectDetails from './components/Projects/ProjectDetails';
import 'react-photo-view/dist/react-photo-view.css';
import DisplayError from './components/Shared/DisplayError/DisplayError';
import Blog from './components/Blog/Blog';
import { ScrollRestoration } from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/project/:id',
          loader: ({ params }) => allProjectsData(params.id),
          element: <ProjectDetails></ProjectDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },
  ]);

  return (
    <div>

      <RouterProvider router={router}> 
            <ScrollRestoration getKey={(location, matches) => {
            // default behavior
            return location.key;
          }}>

          </ScrollRestoration>
      </RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
