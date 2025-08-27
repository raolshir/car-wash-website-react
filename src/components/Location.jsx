
import {photo_carwash_1 } from "../assets";
import styles, { layout } from "../style";
const Location = () => (
  <section id="location" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={photo_carwash_1}
        alt="car wash location"
        className="w-[100%] h-[80%] relative z-[5] rounded-lg object-cover"
      />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Location
      </h2>
      <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
        We are located at <b>3932 W Elm St, McHenry, IL 60050</b>. Drop by for a quick and professional car wash experience.
      </p>
      <div className="mt-6">
        <iframe
          title="Car Wash Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.876219247192!2d-88.27797652441471!3d42.34516233604341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f70e323500717%3A0xc3d9b267bed197!2sClean%20N&#39;%20Shine%20Car%20Wash!5e0!3m2!1sen!2sus!4v1754696481898!5m2!1sen!2sus"
          width="500"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Location;
