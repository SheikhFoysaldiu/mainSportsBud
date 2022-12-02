import logo from './logo.svg';
import './App.css';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto p-5'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
