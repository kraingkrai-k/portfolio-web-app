import type {NextPage} from 'next'

import WrapPage from '../../../src/containers/page'

const Jobs: NextPage = () => {
  return (
    <WrapPage title="Jobs">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          JOB
        </h1>
      </main>
    </WrapPage>
  )
}

export default Jobs
