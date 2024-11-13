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
          <div className="centered-placeholder">
            {/* <i className="fa-sharp fa-regular fa-cart-shopping"></i> */}
            <img src="./images/SuperAnimalRoyale-Logo-Dark.svg" alt="Banner Logo" className={styles.bannerLogo} />
			      {/* <h1 style={{ padding: "0px", margin: "-50px 0px" }}>Merch</h1> */}
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

        <div className="content-container">
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
                  <button className={styles.buyButton}>
                    <span>Add To Cart</span>
                  </button>
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
                  <button className={styles.soldoutButton}>Sold Out</button>
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
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.soldoutButton}>Sold Out</button>
                </div>
              </div>

              {/* Add additional items as needed */}
              <div className={styles.itemBackground}>
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.soldoutButton}>Sold Out</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
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
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.soldoutButton}>Sold Out</button>
                </div>
              </div>
              {/* Add additional items as needed */}
              <div className={styles.itemBackground}>
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemPrice}>
                    <span className="won">￦ </span>19,900
                  </div>
                  <button className={styles.soldoutButton}>Sold Out</button>
                </div>
              </div>

              <div className={styles.itemBackground}>
                <img src="" alt="Name?"/>
                <p>Health Juice Can</p>
                
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


      <Footer />
    </>
  );
}

export default MerchPage;
