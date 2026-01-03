
import 'common/theming/base.css';
import FixFavicon from 'common/theming/FixFavicon';
import 'common/theming/modular.css';
import 'common/theming/text.css';
import 'common/theming/ThemedImg';
import ThemedImg from 'common/theming/ThemedImg';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Link from "next/link";
import './style.css';

export default function EvarLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (<>
		<html lang="en">
			<FixFavicon
				darkSrc="/dir-website/faviconLight/favicon.png"
				lightSrc="/dir-website/faviconDark/favicon.png"
			/>
			<body style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
				<nav className="hGrid fixed glass v10Pad hFill">
					<Link className="s5 e8 ph-e5 hCenter" href="/" title="Evar">
						<ThemedImg
							alt='Evar'
							lightsrc="/dir-websiteimg/EvarTextLogo.svg"
							darksrc="/dir-websiteimg/EvarTextLogo-Dark.svg"
						/>
					</Link>
					<Link className="s9 e12 ph-e5 hCenter" href="/aboutUs" title="AboutUs">
						<p>About Us</p>
					</Link>
				</nav>
				<div className="navPad ph-navPad">
					{children}
					<footer className="bg-l3 hGrid">
						<div className="s1 e3 vPad">
							<p>Lets meet at</p>
							<Link className='rUnitPad' href="https://www.linkedin.com/company/zentru-systems">linkedIn</Link>
							<Link className='lUnitPad' href="https://store.steampowered.com/developer/evarspace">Steam</Link>
						</div>
						<div className='s4 e8 ph-s1 ph-e5 tPad'>
							<h2 style={{ lineHeight: 0.92, fontWeight: 900 }}>
								This site is for a University project, it may contain incorrect information and is only used for educational intents and purposes.
							</h2>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset vPad tUnitPad">
							<p>A field of</p>
							<Link href="https://zentru.systems" title="Zentru Systems e.U.">
								<img style={{ height: 25 }} src="/dir-websiteimg/Brightness=Dark,Color=Green.svg" loading="lazy" />
							</Link>
						</div>
						<div className="s11 e12 ph-s1 ph-e5 vBottom hRight ph-hUnset bUnitPad">
							<Link href="/imprint" title="Imprint">
								<p>Imprint</p>
							</Link>
							<Link href="/privacy-policy" title="Privacy Policy">
								<p>Privacy Policy</p>
							</Link>
							<Link href="/barrierefreiheitserklaerung" title="Barrierefreiheitserklärung">
								<p>Barrierefreiheitserklärung</p>
							</Link>
							<Link href="/legal" title="Legal">
								<p>Legal</p>
							</Link>
						</div>
					</footer>
				</div>
			</body>
		</html>
	</>);
}

export const metadata: Metadata = {
	title: "EVAR",
	keywords: [
		"Games",
		"debris",
	],
	description: "Games for you",
	robots: { index: true, follow: true },
	openGraph: {
		title: "EVAR",
		siteName: "EVAR",
		countryName: "Austria",
		type: 'website',
		url: "https://evar.space",
		description: "Games for you",
		images: {
			href: "https://evar.space",
			url: "https://evar.space/opengraph-image.png",
		}
	},
	twitter: {
		title: "Evar",
		site: "Evar",
		card: "summary_large_image",
		description: "Games for you",
		images: {
			href: "https://evar.space",
			url: "https://evar.space/opengraph-image.png",
		}
	},
	icons: {
		icon: [
			{
				url: '/faviconDark/favicon.png',
				id: "favicon"
			} as unknown as Icon]
	},
	metadataBase: new URL('https://evar.space')
};