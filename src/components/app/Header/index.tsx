import style from "./index.module.css";
import { useEffect, useState } from "react";

interface Props {
	transparentOnTop?: boolean;
}

function Header(props: Props) {

	// States

	const [isTransparent, setIsTransparent] = useState<boolean>(!!props.transparentOnTop);

	// Effects

	useEffect(() => {

		if (!props.transparentOnTop) return;

		const callback = () => {

			if (window.scrollY === 0) setIsTransparent(true);
			else setIsTransparent(false);

		};

		window.addEventListener("scroll", callback);

		return () => {

			window.removeEventListener("scroll", callback);

		};

	}, [props.transparentOnTop]);

	// Render

	return (
		<div className={[style.header, isTransparent ? style.transparent : ""].join(" ")}>
			<div className={style.container}>
				<div className={style.logo}>LOGO</div>
				<nav className={style.navigation}>
					<a href="./merch.html">MERCH</a>
					<a href="https://animalroyale.fandom.com/wiki/Super_Animal_Royale_Wiki">WIKI</a>
					<a href="./community.html">COMMUNITY</a>
					<a href="./profile.html">PROFILE</a>
				</nav>
			</div>
		</div>
	);

}

export default Header;
