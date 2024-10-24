import Header from "../components/app/Header";
import Footer from "../components/app/Footer";
import styles from "./index.module.css";
import { useCallback, useState } from "react";

function IndexPage() {

	// States

	const [videoSlideIndex, setVideoSlideIndex] = useState<number>(0);
	const totalSlides: number = 6; // 슬라이드 총 개수

	// Callbacks
	const prevSlide = useCallback(() => {
		setVideoSlideIndex((prev) => prev - 1 < 0 ? totalSlides - 1 : prev - 1);
	}, [totalSlides]);

	const nextSlide = useCallback(() => {
		setVideoSlideIndex((prev) => prev + 1 >= totalSlides ? 0 : prev + 1);
	}, [totalSlides]);

	// Render

	return (
		<>
			<Header transparentOnTop={true}/>
			<main className={styles.sectionHero}>
				<div className={styles.heroCenter}>
					<div className={styles.heroLogo}>
						<img alt={"SUPER ANIMAL ROYALE"} src={"/images/SAR_Background_0.png"}/>
					</div>
					<div className={styles.heroDescription}>
						64 animals will fight against each other and only the last one will emerge victorious!<br/>
						Which animal will survive to the end and become WABADA?
					</div>
					<div className={styles.heroButtons}>
						<button className={[styles.button, styles.steam].join(" ")} onClick={() => window.location.href = 'https://store.steampowered.com/app/843380/Super_Animal_Royale/'}>Steam</button>
						<button className={[styles.button, styles.xbox].join(" ")} onClick={() => window.location.href = 'https://www.xbox.com/en-us/games/store/super-animal-royale/9n872vfsppql/'}>Xbox</button>
						<button className={[styles.button, styles.playstation].join(" ")} onClick={() => window.location.href = 'https://store.playstation.com/concept/10000714/'}>PlayStation</button>
						<button className={[styles.button, styles.nintendo].join(" ")} onClick={() => window.location.href = 'https://www.nintendo.com/games/detail/super-animal-royale-switch/'}>Nintendo</button>
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
					<div className={styles.sliderWrapper}>
						<div className={styles.slider} style={{ left: `calc(${-100 * videoSlideIndex}% + ${-30 * videoSlideIndex}px)` }}>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/ykNQCEA1p2o" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/fVb7TEYKIPs" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/U4302dKJegc" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/mlhg2rMHOlY" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/jQi_6kWmflQ" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
							<div className={styles.slide}>
								<iframe width="960" height="540" src="https://www.youtube.com/embed/zp_MrjsDfco" title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						</div>
					</div>
					<div className={styles.sliderIndicator}>
						{Array.from({ length: totalSlides }).map((_, index) => (
							<span
								key={index}
								className={`${styles.indicator} ${index === videoSlideIndex ? styles.active : ''}`}
							></span>
						))}
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
								<img src="/images/Super_Animal_Royale_Free_Edition.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER ANIMAL ROYALE</div>
								<div className={styles.description}>Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/images/Super_Animal_Royale_Super_Edition.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER EDITION</div>
								<div className={styles.description}>Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.
									
								</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/images/Super_Animal_Royale_Support_Pack.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER ANIMAL ROYALE SUPPORT PACK</div>
								<div className={styles.description}>Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.
									
								</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/images/Super_Animal_Royale_Starter_Pack.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SEASON 10 STARTER PACK</div>
								<div className={styles.description}>Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.sectionNews}>
				<div className={styles.contentContainer}>
					<div className={styles.centeredPlaceholder}>NEWS</div>
					<div className={styles.newsPage}>
						
					</div>
				</div>
			</section>
			<section className={styles.sectionCredit}>
				<div className={styles.contentContainer}>
				</div>
			</section>
			<Footer />
		</>
	);

}

export default IndexPage;
