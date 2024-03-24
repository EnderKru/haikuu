import {RouterProvider} from 'react-router-dom';
import {router} from './app/index';
import './styles/common.css';

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
