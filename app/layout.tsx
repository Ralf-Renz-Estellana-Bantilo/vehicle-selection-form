import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand( { subsets: ['latin'] } )

export const metadata: Metadata = {
  title: 'Drill Down Form App',
  description: 'Cooee Inc. - Senior Front End Developer Code Assessment',
}

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode
} )
{
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
