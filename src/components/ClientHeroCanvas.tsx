'use client'

import dynamic from 'next/dynamic'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function ClientHeroCanvas() {
  return <HeroCanvas />
}
