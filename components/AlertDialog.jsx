'use client'

import 'styles/AlertDialog.scss'
import { useState, useEffect } from 'react'
import ReactModal from "react-modal"

export default function AlertDialog ({ visibility, title, message, buttonPostive, action, actionNegative }) {

  const [isOpen, setIsOpen] = useState(visibility)

  const onClose = () => {
    setIsOpen(false)
    actionNegative(false)
  }

  const handlePostive = () => {
    action()
    onClose()
  }

  useEffect(() => {
    setIsOpen(visibility)
  }, [visibility])

  return (
    <ReactModal onRequestClose={onClose} isOpen={isOpen} role='dialog' className='alert-dialog' overlayClassName='alert-dialog-overlay'>
      <div className='alert-dialog-container'>
        <div className='alert-dialog-info'>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
        <div className='alert-dialog-action'>
          <button onClick={handlePostive} className='btn-positive'>
            {buttonPostive}
          </button>
          <button onClick={onClose} className='btn-negative'>
            Cancelar
          </button>
        </div>
      </div>
    </ReactModal>
  )
}