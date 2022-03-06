import { GlobeAltIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import useIsTablet from "src/hooks/useIsTablet";

import { RootState } from "src/store/reducers/rootReducer";
import Link from "next/link";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { urls } from "src/modules/urls";
import { moveTo } from "src/modules/routerHelper";
import LocaleDropdown from "./LocaleDropdown";
import MobileMenuDropdown from "./MobileMenuDropdown";
import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";

const TopBar = ({ mode }) => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };

	return (
		<Div absolute wFull z100 {...textColorProp}>
			<Row flex justifyCenter py20 mx30={!isTablet} mx10={isTablet}>
				<Col auto flex itemsCenter px20={!isTablet}>
					{/* <Div imgTag src={"images/sooniLabsBWIconNoBg.png"} h={200} w={200} style={{ opacity: 0.8 }}></Div> */}
					<Div imgTag src={"images/sooniLabsIconNoBg.png"} h={591 / 8} w={422 / 8} style={{ opacity: 0.9, transform: "rotate(-90deg)" }} mx20></Div>
				</Col>
				<Col />
				{isTablet ? (
					<>
						<Col auto flex itemsCenter cursorPointer>
							<LocaleDropdown />
						</Col>
						<Col auto flex itemsCenter cursorPointer>
							<MobileMenuDropdown />
						</Col>
					</>
				) : (
					<>
						<Col auto flex itemsCenter cursorPointer onClick={() => moveTo(urls.team.index)}>
							<Div spanTag fontBold px20>
								{globalsWording.topbar.pages.team[locale]}
							</Div>
						</Col>
						<Col auto flex itemsCenter cursorPointer onClick={() => moveTo(urls.portfolio.index)}>
							<Div spanTag fontBold px20>
								{globalsWording.topbar.pages.portfolio[locale]}
							</Div>
						</Col>
						<Col auto flex itemsCenter cursorPointer onClick={() => moveTo(urls.contact.index)}>
							<Div spanTag fontBold px20>
								{globalsWording.topbar.pages.contact[locale]}
							</Div>
						</Col>
						<Col auto flex itemsCenter cursorPointer>
							<LocaleDropdown />
						</Col>
					</>
				)}
			</Row>
		</Div>
	);
};

export default TopBar;
