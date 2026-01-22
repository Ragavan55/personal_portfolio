import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ragavan Aruchamy - Full Stack Developer',
  description: 'Professional portfolio and resume of Ragavan Aruchamy, Junior Full Stack Developer specializing in React, Next.js, Django, and MERN stack.',
  keywords: 'Full Stack Developer, React, Next.js, Django, MERN Stack, Portfolio, Resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
