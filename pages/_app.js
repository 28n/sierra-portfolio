import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { SessionProvider } from 'next-auth/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router, session }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <SessionProvider session={session}>
            <Component {...pageProps} key={router.route} />
          </SessionProvider>
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default MyApp
