import IndexPage from '@app/index-page'
import { Suspense } from 'react'
import { lazy }  from 'react'
import React from 'react'

const Remote = lazy(() => import('remote/index'))

const Page = () => <>
  <IndexPage />
  <Suspense fallback="Loading...">
    <Remote />
  </Suspense>
</>

export default Page
