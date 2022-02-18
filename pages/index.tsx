import { Button, Htag, Ptag, Tag } from '../components'

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
      <div style={{ backgroundColor: 'white' }}>
        <Ptag size="s">123</Ptag>
        <Ptag size="m">123</Ptag>
        <Ptag size="l">123</Ptag>
        <Tag>123</Tag>
        <Tag>123</Tag>
        <Tag heightType="m" color="grey">
          10
        </Tag>
        <Tag heightType="m" color="red">
          10
        </Tag>
        <Tag heightType="s" color="green">
          -10 000
        </Tag>
        <Tag heightType="s" color="primary">
          -10 000
        </Tag>
      </div>
    </div>
  )
}
