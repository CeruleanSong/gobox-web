import { motion } from 'framer-motion';

import Head from './_Head';
import NavBar from './_NavBar';
import ActiveLink from './_ActiveLink';
import { OpenGraphImages } from 'next-seo/lib/types';

import { FaSignOutAlt, FaArrowAltCircleUp, 
	FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
	
import config from '../../config.json';

interface Props {
	authorization?: AuthorizationState;
	logoutFunc?: (e: any) => any;
	authLink: {
		href: string,
		icon: JSX.Element,
	},
	links: {
		href: string,
		icon: JSX.Element,
	}[];
	headProps: {
		title?: string;
		description?: string;
		url?: string;
		ogTitle?: string;
		ogDescription?: string;
		ogUrl?: string;
		ogImages?: OpenGraphImages[];
		ogSiteName?: string;
		twHandle?: string;
		twSite?: string;
	}
};

const DefaultLayout: React.FunctionComponent<Props> = (props) => {

	const navigationVariants = {
		initial: { opacity: 0, y: '100vw' },
		enter: { opacity: 1, y: '0vw', transition: { duration: 0.4 } },
		exit: { opacity: 0, y: '100vw', transition: { duration: 0.6 } },
	}
	
	/********* component *********/
	  
	return (
		<div id="body" className="text-center">
			
			<Head {...props.headProps} />
			
			<div id="screen" className="full screen display-hidden"/>

			<div id="navbar" className="">
				<h1 className="nav-link upload">
					<ActiveLink href="/">
						{config.title}
					</ActiveLink>
				</h1>
				<NavBar
				authorization={props.authorization}
				logoutFunc={props.logoutFunc}
				links={props.links}
				authLink={props.authLink} />
			</div>

			<motion.div initial="initial" animate="enter" exit="exit" 
			variants={navigationVariants}>
				<div  id="masthead" className="container" >
					{ props.children }
				</div>
			</motion.div>

		</div>
	);
};

export default DefaultLayout;