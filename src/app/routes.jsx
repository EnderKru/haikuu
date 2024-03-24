import {createBrowserRouter} from 'react-router-dom'
import {
  SignInPage,
  MainPage,
  SignUpPage,
  ProfilePage,
  NoPage
} from "../pages"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/registration',
    element: <SignInPage/>
  },
  {
    path: '/*',
    element: <NoPage />
  },
  {
    path: '/login',
    element: <SignUpPage/>
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
])
