import ThemeSwitcher from '@components/ThemeSwitcher'
import Header from '@components/header/Header'
import Provider from '@components/providers/Provider'
import QueryProvider from '@components/providers/QueryProvider'
import ThemesProvider from '@components/providers/ThemesProvider'
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
            <ThemesProvider>
              <Header />
              <main >
                {children}
              </main>
              <ThemeSwitcher />
            </ThemesProvider>
          </Provider>
        </QueryProvider>
      </body>
    </html>
  )
}
