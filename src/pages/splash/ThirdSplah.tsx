import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import splashImg from '../../assets/images/splah3.png'

const ThirdSplah = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/edurex/auth');
    }, 3 * 1000); // Convert seconds to milliseconds

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className=' flex flex-col justify-center items-center py-14'>
      <img src={splashImg} alt="happy man" />
      <div>
        <h2 className="w-[358px] text-center text-cyan-900 text-[29px] font-extrabold leading-[45.10px] mt-8 mb-4">Be in charge!!</h2>
        <p className="w-[311px] text-center mx-auto">
          <span className="text-zinc-500 text-base font-medium leading-relaxed">Make </span><span className="text-zinc-500 text-base font-medium leading-normal"> </span>
          <span className="text-cyan-900 text-xl font-bold leading-loose">Payment, Remove</span>
          <span className="text-zinc-500 text-base font-medium leading-relaxed"> or </span>
          <span className="text-cyan-900 text-xl font-bold leading-loose">Add</span>
          <span className="text-zinc-500 text-base font-medium leading-relaxed"> persons to your </span>
          <span className="text-cyan-900 text-xl font-bold leading-loose">Group</span>
        </p>
        <div className="text-right text-cyan-900 text-sm font-bold"><Link to='/edurex/auth'>SKIP</Link></div>
      </div>
    </div>
  )
}

export default ThirdSplah