import { cookies } from 'next/headers'
import Header from '@components/header/Header'
import Provider from '@components/Provider'
import QueryProvider from '@components/QueryProvider'
import ThemeToggler from '@components/ThemeToggler'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get("theme") || { name: "theme", value: "dark" }
  console.log(theme.value);

  return (
    <html lang="en">
      <head>
        <title>Fashion Store</title>
        <meta name="description" content="Best store in town." />
      </head>
      <body className={`${inter.className} ${theme.value}`}>
        <QueryProvider>
          <Provider>
            <Header />
            <main >
              {children}
            </main>
          </Provider>
        </QueryProvider>
        <ThemeToggler />
      </body>
    </html>
  )
}
