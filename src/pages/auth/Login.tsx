import { useForm } from "react-hook-form";
import TextField from '../../components/reusable/TextField'
import user from '../../assets/icons/user.svg'

const Login = () => {
  const {handleSubmit, control} = useForm();

  const loginUser = async() => {
    
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
      </form>


    </div>
  )
}

export default Login