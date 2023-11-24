import React from 'react'
import type { Metadata } from 'next'
import Providers from './providers'
import { RouteProgressBar, Navbar } from './components'
import { cookies } from 'next/headers'
import '@fontsource/open-sans/500.css'
import './lib/styles/global.css'

const title = 'Inverter Network'
const { description, applicationName, images } = {
  applicationName: `${title} | Web3 Template`,
  description:
    'Easily edit and deploy your own web3 application with this template.',
  images: [
    {
      url: 'InverterNetwork/media/main/inverter-dark-banner.png',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com/'),
  title,
  applicationName,
  description,
  openGraph: {
    type: 'website',
    title,
    siteName: applicationName,
    description,
    images,
  },
  twitter: {
    card: 'summary_large_image',
    title: applicationName,
    description,
    images,
  },
}

function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const colorMode = (cookieStore.get('chakra-ui-color-mode')?.value ??
    'light') as 'light' | 'dark'
  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      {/* PWA config */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Inverter PWA" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width height=device-height initial-scale=1"
      />
      <link rel="icon" href="/icon-512x512.png" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <body className={`chakra-ui-${colorMode}`}>
        <Providers>
          <RouteProgressBar />
          {/* <InitialOverlay /> */}
          {/* CONTENT */}
          <div className="layout-body">
            <Navbar />
            <div className="content">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
