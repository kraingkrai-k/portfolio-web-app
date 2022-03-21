import type {NextPage} from 'next'
import {useEffect} from 'react'

import WrapPage from '../../src/containers/page'

const Todo: NextPage = ({data, ok}: any) => {

  // const helloFetch = async () => {
  //   const res = await fetch('http://localhost:3030/dashboard-version')
  //   const response = await res.json()
  //   console.log('response async', response)
  // }

  // const helloFetch = () => {
  //   fetch('http://localhost:3030/dashboard-version')
  //     .then(res => {
  //       console.log('response then', res.json().then(x => x))
  //     })
  // }

  useEffect(() => {
    // (async () => {
    //   await helloFetch()
    //   await helloFetch()
    //   await helloFetch()
    //   await helloFetch()
    // })()

    // helloFetch()
    // helloFetch()
    // helloFetch()
    // helloFetch()
  }, [])

  return (
    <WrapPage title="Todo">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world {ok}
          </span>
        </div>

      </main>
    </WrapPage>
  )
}

export default Todo