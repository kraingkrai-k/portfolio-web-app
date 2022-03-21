import type {NextPage} from 'next'

import WrapPage from '../../src/containers/page'

const TodoEdit: NextPage = ({data}: any) => {
  console.log('edit with:' , data)
  return (
    <WrapPage title="TodoEdit">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world Edit
          </span>
        </div>

      </main>
    </WrapPage>
  )
}

export default TodoEdit