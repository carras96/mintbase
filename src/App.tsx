import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage'
import BuyPlotsPage from './components/pages/BuyPlotsPage'
import AirdropPage from './components/pages/AirdropPage'
import WaitListPage from './components/pages/WaitListPage'
import AboutUsPage from './components/pages/AboutUsPage'

// const router = createBrowserRouter(
//   [
//     {
//       id: 'root',
//       path: '/',
//       Component: Layout,
//       errorElement: <p>Error</p>,
//       children: [
//         {
//           index: true,
//           Component: HomePage,
//           errorElement: <p>Error</p>
//         },
//         {
//           path: 'buy-plots',
//           Component: BuyPlotsPage,
//           errorElement: <p>Error</p>
//         },
//         {
//           path: 'airdrop',
//           Component: AirdropPage,
//           errorElement: <p>Error</p>
//         },
//         {
//           path: 'wait-list',
//           Component: WaitListPage,
//           errorElement: <p>Error</p>
//         },
//         {
//           path: 'about-us',
//           Component: AboutUsPage,
//           errorElement: <p>Error</p>
//         }
//       ]
//     }
//   ],
//   { basename: '/' }
// )

// function App() {
//   return <RouterProvider router={router} />
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='buy-plots' element={<BuyPlotsPage />} />
          <Route path='airdrop' element={<AirdropPage />} />
          <Route path='wait-list' element={<WaitListPage />} />
          <Route path='about-us' element={<AboutUsPage />} />

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path='*' element={<p>Error</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
