import Header from '@components/header/Header'
import Provider from '@components/providers/Provider'
import QueryProvider from '@components/providers/QueryProvider'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Fashion Store</title>
        <meta name="description" content="Best store in town." />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <Provider>
            <Header />
            <main >
              {children}
            </main>
          </Provider>
        </QueryProvider>
      </body>
    </html>
  )
}
