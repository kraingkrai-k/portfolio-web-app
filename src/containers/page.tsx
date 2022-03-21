import type {NextPage} from 'next'
import Head from 'next/head'

import {PageProps} from './model/page'

const WrapPage = ({children, title}: PageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}

export default WrapPage
