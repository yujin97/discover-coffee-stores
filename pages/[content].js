import { useRouter } from 'next/router';
import Head from 'next/head';

const Content = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.content}</title>
            </Head>
            Hi I am the dynamic route: {router.query.content}
        </div>
    )
}

export default Content;