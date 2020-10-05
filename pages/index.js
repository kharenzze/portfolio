import Head from 'next/head'
import styled from '@emotion/styled'
import { Row, Main } from "../components/layout";
import { WIP } from "../components/svg/undraw/WIP";
import cx from 'classnames'

const WIPImage = styled(WIP)`
  min-width: 300px;
  max-width: 500px;
  width: 50%;
  height: auto;
  margin-top: 100px;
`

const AnimatedRow = styled(Row)`
  animation-delay: 0.7s;
`

export default function Home() {
  const cssAnimated = cx('centered', 'animated',  'jackInTheBox')
  return (
    <Main>
      <Head>
        <title>Kharenzze</title>
        <link rel="icon" type="image/svg+xml" href="/portfolio/developer_emoji.svg"/>
      </Head>
      <AnimatedRow className={cssAnimated}>
          <h1>Paolo Raez</h1>
      </AnimatedRow>
      <AnimatedRow className={cssAnimated}>
        <span>This portfolio site is under construction...</span>
      </AnimatedRow>
      <Row className="centered">
        <WIPImage color="#1890ff"/>
      </Row>
    </Main>
  )
}
