import Header from "../../components/app/Header";
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
			<h1 style={{ padding: "0px", margin: "0px" }}>Merch</h1>
          </div>
        </div>
      </section>

      {/* Section 1: Health Juice Can & Tumbler */}
      <section className={styles.sectionMerch1}>
        <div className="content-container">
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              <div className={styles.itemBackground}>
                <img src="/images/HealthJuice-SippyCan.webp"/>
                <p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
                <button className={styles.buyButton}>
                  <span className="won">￦ </span>19,900
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.sectionMerch2}>
        <div className="content-container">
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              {/* Repeatable Items */}
              <div className={styles.itemBackground}>
                <img src="/images/HealthJuice-SippyCan.webp"/>
                <p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
                <button className={styles.soldoutButton}>Sold Out</button>
              </div>
              {/* Add additional items as needed */}
			  
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.sectionMerch3}>
        <div className="content-container">
          <div className="centered-placeholder">
            <div className={styles.itemBack}>
              <div className={styles.itemBackground}>
                <img src="/images/HealthJuice-SippyCan.webp"/>
                <p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
                <button className={styles.soldoutButton}>Sold Out</button>
              </div>
              {/* Add additional items as needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MerchPage;
