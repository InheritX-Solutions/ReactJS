import React from 'react'
import burgerLogo from '@assets/images/burger-logo.png'

interface LogoProps {
  height?: string
}

export const Logo: React.FC<LogoProps> = ({ height }) => {
  return (
    <div className="bg-white p-2 h-full box-border rounded" style={{ height }}>
      <img src={burgerLogo} alt="MyBurger" className="h-full" />
    </div>
  )
}
