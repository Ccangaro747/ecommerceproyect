// Importa los módulos necesarios
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './css/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '../../contexts/CartContext'
import { AuthProvider } from '../../contexts/AuthContext'; // Importa el AuthProvider

// Configura la fuente Inter
const inter = Inter({ subsets: ['latin'] })

export const meta: Metadata = {
  title: 'Next.js Ecommerce Coderhouse',
  description: 'Next.js Ecommerce Coderhouse',
}

// Define el componente RootLayout
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Usa un fragmento de React para envolver el contenido
    <>
      <html lang="en">
        <body className="font-bodyFont w-full bg-main-bg text-darkText">
          {/* Proporciona el AuthProvider y el CartProvider */}
          <AuthProvider>
            <CartProvider>
              <Header />
              {children}
              </CartProvider>
              <Footer />

          </AuthProvider>
        </body>
      </html>
    </>
  )
}

// Exporta el componente RootLayout
export default RootLayout;





