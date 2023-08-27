import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage'
import BuyPlotsPage from './components/pages/BuyPlotsPage'
import AirdropPage from './components/pages/AirdropPage'
import WaitListPage from './components/pages/WaitListPage'
import AboutUsPage from './components/pages/AboutUsPage'

const router = createBrowserRouter(
  [
    {
      id: 'root',
      path: '/',
      Component: Layout,
      errorElement: <p>Error</p>,
      children: [
        {
          index: true,
          Component: HomePage,
          errorElement: <p>Error</p>
        },
        {
          path: 'buy-plots',
          Component: BuyPlotsPage,
          errorElement: <p>Error</p>
        },
        {
          path: 'airdrop',
          Component: AirdropPage,
          errorElement: <p>Error</p>
        },
        {
          path: 'wait-list',
          Component: WaitListPage,
          errorElement: <p>Error</p>
        },
        {
          path: 'about-us',
          Component: AboutUsPage,
          errorElement: <p>Error</p>
        }
      ]
    },
    {
      index: true,
      Component: HomePage,
      errorElement: <p>Error</p>
    },
    {
      path: 'buy-plots',
      Component: BuyPlotsPage,
      errorElement: <p>Error</p>
    },
    {
      path: 'airdrop',
      Component: AirdropPage,
      errorElement: <p>Error</p>
    },
    {
      path: 'wait-list',
      Component: WaitListPage,
      errorElement: <p>Error</p>
    },
    {
      path: '/about-usssss',
      Component: AboutUsPage,
      errorElement: <p>Error</p>
    }
  ],
  { basename: '/' }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
