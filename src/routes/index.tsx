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
						<button className={[styles.button, styles.steam].join(" ")} onClick={() => window.open('https://store.steampowered.com/app/843380/Super_Animal_Royale/', '_blank')}>Steam</button>
						<button className={[styles.button, styles.xbox].join(" ")} onClick={() => window.open('https://www.xbox.com/en-us/games/store/super-animal-royale/9n872vfsppql/', '_blank')}>Xbox</button>
						<button className={[styles.button, styles.playstation].join(" ")} onClick={() => window.open('https://store.playstation.com/concept/10000714/', '_blank')}>PlayStation</button>
						<button className={[styles.button, styles.nintendo].join(" ")} onClick={() => window.open('https://www.nintendo.com/games/detail/super-animal-royale-switch/', '_blank')}>Nintendo</button>
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
					<div className={styles.title}>GET SUPER ANIMAL ROYALE</div>
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
								<div className={styles.description}>
									Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.
									<div className={styles.descriptionDetail}>
										<span>Play for Free</span>
										<p>Unlock 300+ Super Animal Breeds and 400+ Cosmetic Items!</p>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.dlcSlide}>
							<div className={styles.dlcImg}>
								<img src="/images/Super_Animal_Royale_Super_Edition.png" width="228" height="342"/>
							</div>
							<div className={styles.dlcInfo}>
								<div className={styles.title}>SUPER EDITION</div>
								<div className={styles.description}>
									Play on PC, Mac, Xbox One, Xbox Series S|X, PS4, PS5 and Nintendo Switch.
									<div className={styles.descriptionDetail}>
										<span>DLC + Super Perks</span>
										<ul>
											<li>4 Exclusive Super Animals</li>
											<li>10 Exclusive Cosmetic Items</li>
											<li>1000 S.A.W. Tickets</li>
											<li>100+ Super Milestones</li>
											<li>2x Carl Coin earn rate</li>
										</ul>
									</div>
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
									<div className={styles.descriptionDetail}>
										<span>Available During Season 10</span>
										<ul>
											<li>Super Fairy Skullcat</li>
											<li>Fairy Armor</li>
											<li>Fairy Sword</li>
											<li>600 S.A.W. Tickets</li>
										</ul>
									</div>
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
						{/* News Contents */}
						<article className={styles.newsArticle}>
							<h2>Howloween 2024 Week 3 & Day of the Dead</h2>
							<p>
								The latest news for Super Animal Royale, posted on October 29, 2024, is titled 
								<strong>"Howloween 2024 Week 3 & Day of the Dead"</strong>. 
								This update reveals the final week’s challenges and rewards for the Howloween event, which will conclude on November 8.
							</p>
							<p>
								Additionally, two new super animal breeds, <strong>Super Kappa Turtle</strong> and <strong>Super Alebrije Owl</strong>, have been added to the research lab.
							</p>
							<p>
								Moreover, by using the code <strong>'DAYOFTHEDEAD'</strong>, players can unlock several new items, including the 
								<strong>White Mariachi Hat</strong> and <strong>Mariachi Dress</strong>.
							</p>
							<a href="https://steamcommunity.com/app/843380/allnews/" target="_blank" rel="noopener noreferrer">
								Read more on Steam
							</a>
						</article>
					</div>
				</div>
			</section>
			<section className={styles.sectionCredit}>
				<div className={styles.contentContainer}>
					<a href="https://pixilestudios.com/" target="_blank">
						<img src="/public/images/logos/pixile_logo.png" />
					</a>
					<h1>Available Now on PC, Mac & All Major Consoles</h1>
					<div className={styles.logoContainer}>
						<div className={styles.logo}>
							<a href="https://pixilestudios.com/" target="_blank">
								<img src="/public/images/logos/logos_steam.png" className={styles.defaultLogo}/>
								<img src="/public/images/logos/logos_steam_colored.png" className={styles.coloredLogo}/>
							</a>
						</div>
						<div className={styles.logo}>
							<a href="https://pixilestudios.com/" target="_blank">
								<img src="/public/images/logos/logos_PS5PS4.png" className={styles.defaultLogo}/>
								<img src="/public/images/logos/logos_PS5PS4_colored.png" className={styles.coloredLogo}/>
							</a>
						</div>
						<div className={styles.logo}>
							<a href="https://pixilestudios.com/" target="_blank">
								<img src="/public/images/logos/logos_XBOXONE.png" className={styles.defaultLogo}/>
								<img src="/public/images/logos/logos_XBOXONE_colored.png" className={styles.coloredLogo}/>
							</a>
						</div>
						<div className={styles.logo}>
							<a href="https://pixilestudios.com/" target="_blank">
								<img src="/public/images/logos/logos_XboxSeriesXS.png" className={styles.defaultLogo}/>
								<img src="/public/images/logos/logos_XboxSeriesXS_colored.png" className={styles.coloredLogo}/>
							</a>
						</div>
						<div className={styles.logo}>
							<a href="https://pixilestudios.com/" target="_blank">
								<img src="/public/images/logos/logos_SWITCH.png" className={styles.defaultLogo}/>
								<img src="/public/images/logos/logos_SWITCH_colored.png" className={styles.coloredLogo}/>
							</a>
						</div>
					</div>
					<div className={styles.ratingImage}>
						<img src="/public/images/SAR_Rating.png" />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);

}

export default IndexPage;
