import splashImg from '../../assets/images/splah1.png'

const FirstSplash = () => {
  return (
    <div className=' flex flex-col justify-center items-center py-14'>
      <img src={splashImg} alt="family reading" />
      <div>
      <h2 className="w-[358px] text-center text-cyan-900 text-[29px] font-extrabold leading-[45.10px] mt-8 mb-4">Unlimited Bonding </h2>
      <p className="w-[311px] text-center mx-auto">
        <span className="text-zinc-500 text-base font-medium leading-relaxed">Make</span><span className="text-zinc-500 text-base font-medium leading-normal"> </span>
        <span className="text-cyan-900 text-xl font-bold leading-loose">Unlimited</span>
        <span className="text-zinc-500 text-base font-medium leading-relaxed"> mobile phone calls within </span>
        <span className="text-cyan-900 text-xl font-bold leading-loose">Your Group</span>
      </p>
      <div className="text-right text-cyan-900 text-sm font-bold">SKIP</div>
      </div>
    </div>
  )
}

export default FirstSplash