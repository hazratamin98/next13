import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: ' Next',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='container'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
