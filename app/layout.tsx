"use client"
import Header from '@components/header/Header'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new QueryClient()
  return (
    <html lang="en">
      <head>
        <title>Fashion Store</title>
        <meta name="description" content="Best store in town." />
      </head>
      <body className={inter.className}>
        <Provider>
          <Header />
          <QueryClientProvider client={client}>
            <main >
              {children}
            </main>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
