import Head from 'next/head'
import styled from '@emotion/styled'
import { Row, Main } from "../components/layout";
import { WIP } from "../components/svg/undraw/WIP";

const WIPImage = styled(WIP)`
  min-width: 300px;
  max-width: 500px;
  width: 50%;
  height: auto;
`

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
      <Row className="centered">
        <WIPImage/>
      </Row>
    </Main>
  )
}
