import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './App.jsx'
import Home from './Pages/Home.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bookdetails/:bookId',
        // loader: (params)=>
          element: <BookDetails></BookDetails>
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
