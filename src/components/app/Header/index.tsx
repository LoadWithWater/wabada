import style from "./index.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
				<div className={style.logo}><Link to="/">LOGO</Link></div>
				<nav className={style.navigation}>
					<Link to="/login">Login</Link>
					<Link to="/merch">MERCH</Link>
					<a href="https://animalroyale.fandom.com/wiki/Super_Animal_Royale_Wiki">WIKI</a>
					<Link to="/community">COMMUNITY</Link>
					<Link to="/profile">PROFILE</Link>
				</nav>
			</div>
		</div>
	);

}

export default Header;
