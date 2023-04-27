import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Layout/Layout/Layout';
import App from './App'
import Home from './views/Home/Home'
import Headphones from './views/Headphones/Headphones'
import ProductDetail from './views/ProductDetail/ProductDetail';
import Checkout from './views/Checkout/Checkout';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "headphones",
    element: (
      <Layout>
        <Headphones />
      </Layout>
    ),
  },
  {
    path: "headphones/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "speakers",
    element: (
      <Layout>
        <Headphones />
      </Layout>
    ),
  },
  {
    path: "speakers/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "earphones",
    element: (
      <Layout>
        <Headphones />
      </Layout>
    ),
  },
  {
    path: "earphones/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
