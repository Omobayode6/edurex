import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import splashImg from '../../assets/images/splah2.png'

const SecondSplash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/edurex/third');
    }, 3 * 1000); // Convert seconds to milliseconds

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <div className=' flex flex-col justify-center items-center py-14'>
      <img src={splashImg} alt="family dinner" />
      <div>
      <h2 className="w-[358px] text-center text-cyan-900 text-[29px] font-extrabold leading-[45.10px] mt-8 mb-4">Create your own group</h2>
      <p className="w-[311px] text-center mx-auto">
        <span className="text-zinc-500 text-base font-medium leading-relaxed">Have up to </span><span className="text-zinc-500 text-base font-medium leading-normal"> </span>
        <span className="text-cyan-900 text-xl font-bold leading-loose">5 Friends, Family</span>
        <span className="text-zinc-500 text-base font-medium leading-relaxed"> or </span>
        <span className="text-cyan-900 text-xl font-bold leading-loose">Partners</span>
        <span className="text-zinc-500 text-base font-medium leading-relaxed"> on the platform</span>
      </p>
      <div className="text-right text-cyan-900 text-sm font-bold"><Link to='/edurex/third'>SKIP</Link></div>
      </div>
    </div>
  )
}

export default SecondSplash