import { phoneIcon, vacuum, selcSection } from "../assets";
import styles, { layout } from "../style";
const Contact = () => (
   <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How to Reach Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether you need a quick wash or help, our team is ready to assist you. Contact us via phone, or visit our location to experience the best car wash services in town.  
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 flex items-center`}>
        <img src={phoneIcon} alt="Phone" className="w-10 h-10 mr-2 inline-block" />
        <a href="tel:+1-815-322-2430" className="text-gradient font-bold ml-1">+1 (815) 322-2430</a>
      </p>
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
      <img src={selcSection} alt="contact" className="w-[70%] h-[70%] rounded-lg" />
      <img src={vacuum} alt="contact" className="w-[60%] h-[60%] relative z-[0] bottom-20 right-10 rounded-lg shadow-lg" />

    </div>
  </section>
);

export default Contact
