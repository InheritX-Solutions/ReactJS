import React, { useEffect } from 'react'
import { Backdrop } from '@components/ui/Backdrop/Backdrop'

interface ModalProps {
  show: boolean
  modalClosed: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ show, modalClosed, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show) {
        modalClosed()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [show, modalClosed])

  if (!show) return null

  return (
    <>
      <Backdrop show={show} onClick={modalClosed} />
      <div className="fixed z-[500] bg-white w-[70%] md:w-[500px] left-[15%] md:left-1/2 md:-translate-x-1/2 top-[30%] border border-gray-300 shadow-lg p-4 rounded-lg box-border transition-all duration-300 ease-out">
        <button 
          className="absolute right-4 top-2 bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-gray-800" 
          onClick={modalClosed}
        >
          &times;
        </button>
        {children}
      </div>
    </>
  )
}
