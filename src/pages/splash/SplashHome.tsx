import logo from '../../assets/icons/logo.svg'

const SplashHome = () => {
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