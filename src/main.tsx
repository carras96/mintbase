import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider, rem } from '@mantine/core'
import { PlanetContextProvider } from './components/contexts/PlanetContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Quantico',
        colors: {
          text: [
            '#FFF',
            '#C1C1C1',
            '#BABABA',
            '#1556EE',
            '#ffffff63',
            '#ffffffad',
            '#7EB9FF',
            '#5D81FF',
            '#92989F',
            '#ACACAC'
          ],
          otherText: ['#CACACA', '#131313', '#4166EB', '#6CAFFF', '#B2B2B2'],
          background: ['#131313', '#232323', '#2C2C2C', '#222'],
          button: ['#222', '#4166EB'],
          chart: ['#FFF', '#5D81FF', '#74CDFF', '#003498', '#001AFF'],
          other: ['#0052FF', '#71777D']
        },
        components: {
          Text: {
            styles: {
              root: {
                fontSize: rem(20),
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#FFF'
              }
            }
          }
        }
      }}
    >
      <PlanetContextProvider>
        <App />
      </PlanetContextProvider>
    </MantineProvider>
  </React.StrictMode>
)
