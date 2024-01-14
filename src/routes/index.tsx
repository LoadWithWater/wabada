import Header from "../components/app/Header";
import styles from "./index.module.css";
import { useCallback, useState } from "react";

function Index() {

	// States

	const [videoSlideIndex, setVideoSlideIndex] = useState<number>(0);

	// Callbacks

	const prevSlide = useCallback(() => {

		setVideoSlideIndex((prev) => prev - 1 < 0 ? 0 : prev - 1);

	}, []);

	const nextSlide = useCallback(() => {

		setVideoSlideIndex((prev) => prev + 1 > 3 ? 3 : prev + 1);

	}, []);

	// Render

	return (
		<>
			<Header transparentOnTop={true}/>
			<main className={styles.sectionHero}>
				<div className={styles.heroCenter}>
					<div className={styles.heroLogo}>
					</div>
					<div className={styles.heroDescription}>
						64 animals will fight against each other and only the last one will emerge victorious!<br/>
						Which animal will survive to the end and become WABADA?
					</div>
					<div className={styles.heroButtons}>
						<button className="button steam">Steam</button>
						<button className="button xbox">Xbox</button>
						<button className="button nintendo">Nintendo</button>
					</div>
				</div>
			</main>
			<section className={styles.sectionDescription}>
				<div className={styles.contentContainer}>
					<div className={styles.title}>FIGHT FOR FURVIVAL</div>
					<div className={styles.descriptionContainer}>
						<div className={styles.description}>
							64 animals enter.<br/>
							Only one gets to do the winner dance.
						</div>
					</div>
					<div className={styles.slider}>
						{videoSlideIndex === 0 && (
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/U4302dKJegc" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						)}
						{videoSlideIndex === 1 && (
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/mlhg2rMHOlY" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						)}
						{videoSlideIndex === 2 && (
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/jQi_6kWmflQ" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						)}
						{videoSlideIndex === 3 && (
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/zp_MrjsDfco" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						)}
					</div>
					<div className={styles.sliderButtonContainer}>
						<button className={styles.prevButton} onClick={prevSlide}>Prev</button>
						<button className={styles.nextButton} onClick={nextSlide}>Next</button>
					</div>
				</div>
			</section>
			<section className={styles.sectionPurchase}>
				<div className={styles.contentContainer}>
					<div className={styles.title}>FIGHT FOR FURVIVAL</div>
					<div className={styles.descriptionContainer}>
						<div className={styles.description}>
							Play Super Animal Royale free, or upgrade to the Super Edition!
						</div>
					</div>
					<div className={styles.dlcSlider}>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/images/Super Animal Royale Free Edition.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER ANIMAL ROYALE</div>
								<div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/public/images/Super Animal Royale Super Edition.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER EDITION</div>
								<div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/public/images/Super Animal Royale Starter Pack.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SEASON 10 STARTER PACK</div>
								<div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionNews}>
				<div className={styles.contentContainer}>
					<div className={styles.centeredPlaceholder}>NEWS</div>
				</div>
			</section>
			<section className={styles.sectionCredit}>
				<div className={styles.contentContainer}>
					<div className={styles.centeredPlaceholder}>COMPANY</div>
				</div>
			</section>
		</>
	);

}

export default Index;