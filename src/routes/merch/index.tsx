import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import styles from "./index.module.css";

function MerchPage() {
  return (
    <>
      <Header />

      {/* Merch Banner Section */}
      <section className={styles.merchBanner}>
        <div className="content-container">
          <div className={styles.merchbannerBackground}>

          </div>
          <div className="centered-placeholder">
            <img src="./images/SuperAnimalRoyale-Logo-Dark.svg" alt="Banner Logo" className={styles.bannerLogo} />
            <button className={styles.merchallButton}>
              <a href="#">
                View All Apparel
              </a>
            </button>
			      <img src="./images/SAWShopLogo.png" alt="Banner Logo 2" className={styles.bannerLogo2} />
          </div>
        </div>
      </section>

      {/* Section 1: Health Juice Can & Tumbler */}
      <section className={styles.sectionMerch1}>
        <div className={styles.itemHeader}>
          <h1>Health Juice Tumbler</h1>
          <div className={styles.buttonContainer}>
            <button>◀</button>
            <button>▶</button>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              {/* Repeatable Items */}
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/HealthJuice_SippyCan1.png" alt="Name?"/>
                <p>Health Juice Can</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              {/* Add additional items as needed */}
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/HealthJuice_Tumbler1.png" alt="Name?"/>
                <p>Health Juice Tumbler</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/HealthJuice_TumblerLid1.png" alt="Name?"/>
                <p>Health Juice Tumbler Lid</p>

                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.soldoutButton}>Sold Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 2 */}
      <section className={styles.sectionMerch2}>
        <div className={styles.itemHeader}>
          <h1>Fashion</h1>
          <div className={styles.buttonContainer}>
            <button>◀</button>
            <button>▶</button>
          </div>
        </div>

        <div className="content-container">
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              {/* Repeatable Items */}
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/Tee_GLHF1.png" alt="Name?"/>
                <p>GLHF TEE</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              {/* Add additional items as needed */}
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/Tee_SeaVisitor1.png" alt="Name?"/>
                <p>Sea Visitor Tee</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/Tee_SlowJam1.png" alt="Name?"/>
                <p>Slow Jam Tee</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 3 */}
      <section className={styles.sectionMerch3}>
        <div className={styles.itemHeader}>
          <h1>Workshop</h1>
          <div className={styles.buttonContainer}>
            <button>◀</button>
            <button>▶</button>
          </div>
        </div>
        
        <div className="content-container">
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/Flag_Rebel1.png" alt="Name?"/>
                <p>Rabel Flag</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>
              {/* Add additional items as needed */}
              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/Flag_SAW1.png" alt="Name?"/>
                <p>SAW Flag</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/CoastersSet1.png" alt="Name?"/>
                <p>Coasters Set</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="/public/images/Merchs/StickerEmojiPack1.png" alt="Name?"/>
                <p>Sticker Emoji Pack</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.buyButton}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default MerchPage;
