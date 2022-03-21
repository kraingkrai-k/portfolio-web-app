import type {NextPage} from 'next'

import WrapPage from '../../src/containers/page'

const Messages: NextPage = ({data}: any) => {
  console.log('render', data)
  return (
    <WrapPage title="Messages">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello Messages
          </span>
        </div>

      </main>
    </WrapPage>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // const data = await res.json()

  // console.log('data', data)
  // // Pass data to the page via props
  // return {props: {data}}
  return {props: {data: {}}}
}


export default Messages
