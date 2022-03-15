import { GetStaticProps } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Htag, Ptag, Rating, Tag } from '../components'
import { withLayout } from '../layout/Layout'
import { MenuItem } from '../interfaces/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0)
  console.log(menu)
  useEffect(() => {
    console.log('Mounted')
  }, [])
  useEffect(() => {
    console.log('Counter ' + counter)
  }, [counter])

  const [rating, setRating] = useState<number>(4)

  return (
    <>
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
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
