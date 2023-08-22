import Image from 'next/image'
import { center } from '../../styled-system/patterns'
import Button from '@/components/Button/Button'
import { css } from '../../styled-system/css'

export default function Home() {
  return (
    <main className={center({ height: "100%", flexDirection: "column", gap: "8px" })}>

      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Server component title</h1>
      <p>(Inspect button below and notice the duplicated styles)</p>
      <Button className={css({ display: "block", _hover: { color: "red" } })}>
        Client component button
      </Button>

    </main>
  )
}
