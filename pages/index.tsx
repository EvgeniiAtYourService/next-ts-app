import { Button, Htag } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">127683</Htag>
      <Button appearance="primary" arrow="right">
        Button 1
      </Button>
      <Button appearance="ghost">Button 1</Button>
    </div>
  )
}
