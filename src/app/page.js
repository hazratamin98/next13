import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
        <li><Link href="/code/repos">Repos Page</Link></li>
      </ul>
    </div>
  )
}

export default HomePage