import { useState, useEffect } from 'react'
import { Button, Htag, Ptag, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    console.log('Mounted')
  }, [])
  useEffect(() => {
    console.log('Counter ' + counter)
  }, [counter])

  const [rating, setRating] = useState<number>(4)

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
        <p>{counter}</p>
        <button
          onClick={(): void => {
            setCounter(counter + 1)
          }}
        >
          incr
        </button>
        <Rating rating={rating} isEditable setRating={setRating} />
      </div>
    </div>
  )
}
