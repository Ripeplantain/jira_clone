import Image from 'next/image'
import Logo from '../public/logo-no-background.svg'
import { Button } from '@/components/ui/button'
import { GitPullRequestIcon } from 'lucide-react'

const Home = () => {

  const url = 'https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80'

  const style = {
    backgroundImage: `url(${url})`,
  };

  const signInWithGoogle = async () => {
    console.log('Sign in with Google')
  }

  return (
    <div 
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={style}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white flex flex-col">
          <div className="mb-8 flex flex-col items-center">
            <Image src={Logo} width="100" height="100" alt="" />
            <h1 className="mb-2 mt-8 text-2xl">Welcome to Task Master</h1>
          </div>
          <Button onClick={signInWithGoogle} className='p-8'>
            <GitPullRequestIcon size={24} className="mr-2" />
            Sign in with Github</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
