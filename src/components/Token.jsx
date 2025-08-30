import { tokenPrices } from "../constants";
import styles from "../style";
import Feedbackbox from "./Feedbackbox";
import { token } from "../assets";

const Token = () => (
  <section id="token" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        We offer Tokens!!<br className="sm:block hidden" /> reach out to learn<br className="sm:block hidden" /> more. 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <img src={token} alt="Tokens" className="w-[550px] h-[550px] object-contain ml-10 -rotate-90 rounded"/>
      </div>
    </div>
    <div className="w-full flex flex-col justify-center items-center relative z-[1]">
      <h3 className= {`${styles.heading2} text-center`}> 
        1 token = 1 Deluxe car Wash  
      </h3>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {tokenPrices.map((card) => <Feedbackbox key={card.id} {...card} />)}
    </div>
  </section>
);

export default Token
