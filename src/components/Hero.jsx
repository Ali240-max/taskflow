import { ArrowRight, Play } from "lucide-react";
function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-lc500 via-[#a6e7f2] to-vsb400 flex justify-center ">
      <div className="flex flex-col items-center gap-4 max-sm:mt-40 sm:mt-40 ">
        <h1 className="flex items-center flex-col justify-center text-7xl font-bold text-fb500 leading-tight text-center max-xs:text-4xl max-sm:text-4xl  ">
          Organize your Life,
          <span className="block  bg-gradient-to-r from-pc500 to-bg500 bg-clip-text text-transparent">
            Amplify your Success
          </span>
        </h1>
        <p className="text-2xl text-center text-mb400 max-w-[850px] max-sm:text-xl max-sm:max-w-[530px] ">
          TaskFlow helps you streamline your workflow, boost productivity, and
          achieve your goals faster than ever before. Join thousands of users
          who've transformed their daily routine.
        </p>

        <div className="flex gap-4 mt-5 max-us:flex-col">
          <button className="bg-gradient-to-r from-pc500 to-bg500 text-white py-3 px-5 rounded-md cursor-pointer hover:bg-pc500 transition duration-200 hover:from-pc600 hover:to-bg600 transform hover:scale-105 ease-in-out flex items-center text-xl gap-2  ">
            Start Free Today
            <ArrowRight className="w-6 h-6" />
          </button>
          <button className="bg-white/90 text-mb500  py-3 px-5 rounded-md cursor-pointer  transition duration-200 transform hover:scale-105 ease-in-out flex items-center text-xl shadow-lg justify-center gap-2 ">
            Watch Demo
            <Play className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-35 mt-10 max-xs:gap-10 ">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl text-fb500 font-bold">50K+</span>
            <span>Active users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-fb500 font-bold">99.9%</span>
            <span>Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-fb500 font-bold">4.9★</span>
            <span>Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
