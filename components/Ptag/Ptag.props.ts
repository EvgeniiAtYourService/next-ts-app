import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode
  size?: 's' | 'm' | 'l'
}
