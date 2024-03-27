import {RouterProvider} from 'react-router-dom';
import {router} from './app/index';
import './styles/common.scss';

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>

  )
}

export default App
