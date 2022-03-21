import type {NextPage} from 'next'

import WrapPage from '../../src/containers/page'

const TodoDynamic: NextPage = ({data}: any) => {
  console.log('render dynamic', data)
  return (
    <WrapPage title="Todo dynamic route">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello
          </span>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {data?.title}
          </div>
        </div>

      </main>
    </WrapPage>
  )
}

// export async function getStaticProps(context: any) {
//   const id = context?.params?.id || 1
//   // Fetch data from external API
//   // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   // const data = await res.json()

//   // Pass data to the page via props
//   // return {props: {data}}
//   return {}
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {params: {id: "1"}},
//       {params: {id: "2"}},
//     ],
//     fallback: true
//   };
// }

export default TodoDynamic
