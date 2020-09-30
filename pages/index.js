import Head from 'next/head'
import { Row, Main } from "../components/layout";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Kharenzze</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Row className="centered">
        <h1>
          Paolo Raez
        </h1>
      </Row>
    </Main>
  )
}
