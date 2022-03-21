import type {NextPage} from 'next'

import WrapPage from '../src/containers/page'

const Error: NextPage = () => {
  return (
    <WrapPage title="Internal Error">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello Error
          </span>
        </div>
      </main>
    </WrapPage>
  )
}

export default Error
