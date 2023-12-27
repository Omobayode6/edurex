import {Link} from 'react-router-dom'
import user from '../../assets/icons/user.svg'
import flower from '../../assets/images/flowerpot.png'

const AuthScreen = () => {
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <img src={flower} alt="flower pots" className='mb-8'/>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <img src={user} alt="user" className='mb-4'/>
        <Link to='/edurex/login'><button className="w-[364px] h-[57px] px-[147px] py-[19px] bg-cyan-900 rounded-[10px] justify-center items-center gap-2.5 text-white text-base font-bold">
          Login
        </button></Link>
        <Link to='/edurex/register'><button className="w-[363px] h-[57px] px-[137px] py-[19px] bg-white rounded-[10px] border border-zinc-400 justify-center items-center gap-2.5 inline-flex text-center text-cyan-900 text-base font-bold">
          Register
        </button></Link>
      </div>

    </div>
  )
}

export default AuthScreen