import SignInButton from '@/components/SignInButton'
import React from 'react'

function signInPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
        <p className='mb-10'>Clique para Efetuar Login</p>
        <SignInButton/>
    </div>
  )
}

export default signInPage