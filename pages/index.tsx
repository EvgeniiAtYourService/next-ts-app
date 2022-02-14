import { Button, Htag, Ptag } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">127683</Htag>
      <Button appearance="primary" arrow="right">
        Button 1
      </Button>
      <Button appearance="ghost" arrow="down">
        Button 1
      </Button>
      <br />
      <br />
      <br />
      <hr />
      <Ptag size="s">123</Ptag>
      <Ptag size="m">123</Ptag>
      <Ptag size="l">123</Ptag>
    </div>
  )
}
