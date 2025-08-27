import styles from "../style";
import { automaticWash,BayWash} from "../assets";

const Welcome = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Clean 'N Shine <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Car Wash</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience the convenience of our self-service bays and the efficiency of our automatic touchless car wash. Enjoy a spotless clean for your vehicle, anytime you need it!
        </p>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
            <img src={automaticWash} alt="automatic wash" className="w-[70%] h-[70%] relative rounded-full top-0 left-0 " />
            <img src={BayWash} alt="bay wash" className="w-[60% ] h-[60%] relative z-[0] bottom-0 right-20 animate rounded-full" />

        {/* gradient start */}
        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[70%] h-[70%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Welcome;
