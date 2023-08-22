import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage'
import BuyPlotsPage from './components/pages/BuyPlotsPage'
import AirdropPage from './components/pages/AirdropPage'
import WaitListPage from './components/pages/WaitListPage'
import AboutUsPage from './components/pages/AboutUsPage'

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'buy-plots',
        Component: BuyPlotsPage
      },
      {
        path: 'airdrop',
        Component: AirdropPage
      },
      {
        path: 'wait-list',
        Component: WaitListPage
      },
      {
        path: 'about-us',
        Component: AboutUsPage
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
