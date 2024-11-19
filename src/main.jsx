import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './App.jsx'
import Home from './Pages/Home.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx'
import PagesToRead from './Pages/PagesTORead/PagesToRead.jsx'
import ErrorHandle from './Pages/ErrorHandle/ErrorHandle.jsx'

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
        loader: ()=>fetch('/books.json'),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/pagestoread-analysis',
        element: <PagesToRead></PagesToRead>
      }
    ],
    errorElement: <ErrorHandle></ErrorHandle>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
