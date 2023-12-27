import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'

const SplashHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/edurex/first');
    }, 3 * 1000); // Convert seconds to milliseconds

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="h-screen pl-[119px] pr-[119.51px] bg-cyan-900 flex flex-col justify-center items-center">
      <div className="self-stretch justify-start items-center gap-[30.76px] inline-flex">
        <div className="w-[189.49px] h-[128.31px] relative">
        </div>
      </div>
      <img src={logo} alt="CUG logo" />
    </div>
  )
}

export default SplashHome