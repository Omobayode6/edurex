import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/reusable/TextField'
import { Link } from "react-router-dom";
import { api } from "../../api/axios";
import user from '../../assets/icons/user.svg'

const Login = () => {
  const {handleSubmit, control} = useForm();
  const navigate = useNavigate();

  const loginUser = async() => {
    try{
      const res = await api.post('User/Login')
      console.log(res)
      navigate('/dashbord')
    }catch(error:any){
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.response.data.message.toString();
        console.log(resMessage)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <img src={user} alt="CUG user" />
      <h1 className="text-center text-cyan-900 text-[29px] font-bold mt-10">Welcome Back</h1>
      <form onSubmit={handleSubmit(loginUser)}>
        <TextField
          name="email"
          placeholder="Enter your email"
          control={control}
        />
        <TextField
          name="password"
          placeholder="Enter your password"
          control={control}
        />
        <div className="flex justify-between items-center mt-4">
        <p className="text-left text-neutral-700 text-sm font-semibold"><Link to='/forgot-password'>Forgot Password?</Link></p>
        <p className="text-right text-neutral-700 text-sm font-semibold"><Link to='/register'>Don’t an Account?</Link></p>
        </div>
        <button className="w-full h-[57px] px-[147px] py-[19px] bg-cyan-900 rounded-[10px] justify-center items-center gap-2.5 text-white text-base font-bold mt-4">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login