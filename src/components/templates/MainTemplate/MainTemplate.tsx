import { ReactNode } from 'react'
import Header from '../../organisms/Header/Header.tsx'

interface Props {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
