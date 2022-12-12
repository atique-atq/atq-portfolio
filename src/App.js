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


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/project/:id',
          loader: ({ params }) => allProjectsData(params.id),
          element: <ProjectDetails></ProjectDetails>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
