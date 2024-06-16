import Header from "../../components/app/Header";
import styles from "./index.module.css";

function MerchPage() {

	return (
		<>
			<Header/>
			<section id="sectionMerch">
				<div className="content-container">
					<div className="centered-placeholder">
						<i className="fa-sharp fa-regular fa-cart-shopping"></i>
					</div>
				</div>
			</section>
			<section id="sectionMerch1">
				<div className="content-container">
					<div className="centered-placeholder">
						<div className={styles.itemBack}>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-SippyCan.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
								<button>Sold Out</button>
							</div>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-Tumbler.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Tumbler</p>
								<button>Sold Out</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="sectionMerch2">
				<div className="content-container">
					<div className="centered-placeholder">
						<div className={styles.itemBack}>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-SippyCan.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
								<button>Sold Out</button>
							</div>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-Tumbler.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Tumbler</p>
								<button>Sold Out</button>
							</div>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-Tumbler.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Tumbler</p>
								<button>Sold Out</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="sectionMerch3">
				<div className="content-container">
					<div className="centered-placeholder">
						<div className={styles.itemBack}>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-SippyCan.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Can</p>
								<button>Sold Out</button>
							</div>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-Tumbler.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Tumbler</p>
								<button>Sold Out</button>
							</div>
							<div className="item-background">
								<img style={{ paddingTop: "10px", borderRadius: "10px" }} width="280px" height="300px" src="/images/HealthJuice-Tumbler.webp" />
								<p style={{ fontSize: "26px", color: "black" }}>Health Juice Tumbler</p>
								<button>Sold Out</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);

}

export default MerchPage;
