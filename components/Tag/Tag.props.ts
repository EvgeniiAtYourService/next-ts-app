import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  heightType?: 's' | 'm'
  color?: 'ghost' | 'red' | 'green' | 'red' | 'primary' | 'grey'
  href?: string
}
