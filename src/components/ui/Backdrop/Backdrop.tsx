import React from 'react'

interface BackdropProps {
  show: boolean
  onClick: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({ show, onClick }) => {
  return show ? (
    <div 
      className="fixed inset-0 z-[100] bg-black/50" 
      onClick={onClick}
    ></div>
  ) : null
}
