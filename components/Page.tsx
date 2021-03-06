import { chakra } from '@chakra-ui/react'

import { Header } from './Header'
import { Footer } from './Footer'

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <chakra.main minH="100vh">{children}</chakra.main>
      <Footer />
    </>
  )
}
