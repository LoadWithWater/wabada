import Header from "../../components/app/Header";
import styles from "./index.module.css";

function CommunityPage() {
    return (
        <>
            <Header/>
            <section className={styles.communityBanner}>
				<div className="content-container">
					<div className="centered-placeholder">
						<i className="fa-sharp fa-regular fa-cart-shopping"></i>
					</div>
				</div>
			</section>
			<section className={styles.communityContainer}>
				<div className={styles.communityList}>
					
				</div>
			</section>
        </>
    )
}

export default CommunityPage;