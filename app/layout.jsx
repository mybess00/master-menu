'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '../context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={inter.className}>
        <body>
          <CartProvider>
            {children}
          </CartProvider>
        </body>
      </html>
  )
}
