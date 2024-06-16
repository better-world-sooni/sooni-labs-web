import Div from "src/components/Div";
import { pagesWording } from "src/wording/pages";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import useIsTablet from "src/hooks/useIsTablet";
import TopBar from "src/main/components/TopBar";
import "src/scripts/cursorMove";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";
import classNames from "classnames";
import { IMAGES } from "src/modules/images";
import { moveTo } from "src/modules/routerHelper";
import { urls } from "src/modules/urls";

const Welcome = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	return (
		<Div relative clx={"radial-gradient"} px30>
			<Div flex itemsCenter justifyCenter maxW={1100} mxAuto h={"102vh"}>
				<Div flex col itemsCenter justifyCenter>
					<Div relative overflowHidden rounded2xl p0 cursorPointer w300={isTablet} w400={!isTablet}>
						<Div imgTag src={IMAGES.main.sehanProfile} objectCover hFull wFull></Div>
					</Div>
				</Div>
				<Div col fontBold textLeft leadingNone pb70 z100>
					<Div textXl={!isTablet} fontSize60={isTablet} clx={"timeline"} mb10 textGray900 lineHeight={1.3}>
						{pagesWording.index.main.title[locale]}
					</Div>
					<Div textLg={!isTablet} fontSize25={isTablet} clx={"timeline colorful colorful2"} textGray900>
						{pagesWording.index.main.motto[locale]}
					</Div>
				</Div>
			</Div>
		</Div>
	);
};

const Introduction = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 py150={!isTablet}>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={200}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline target={<Div absolute top100 left={"30%"} w720 h720 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.15)" }}></Div>}>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							style={{ zIndex: 100 }}
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyEnd clx={!isTablet && "transition group hover:transition-all"}>
									<Div relative w400 h500>
										<Div absolute imgTag src={IMAGES.main.kaistLogo} w180></Div>
										<Div absolute imgTag src={IMAGES.main.reactLogo} w190 top260 right0></Div>
										<Div absolute imgTag src={IMAGES.main.rubyOnRailsLogo} w220 top250></Div>
										<Div absolute imgTag src={IMAGES.main.awsLogo} w200 top100 right10></Div>
									</Div>
									<Div absolute={!isTablet} top100 left0 clx={"transition group-hover:-translate-y-40"}>
										<Div maxW={400} fontBold mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.introduction.title[locale]}
										</Div>
										<Div
											maxW={500}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.introduction.description[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const PorfolioIntro = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wMax={1100} mxAuto overflowHidden px30 style={{ backgroundColor: isTablet && "rgba(0, 256, 256, 0.15)" }}>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={900}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div flex itemsCenter justifyCenter py150 z100>
									<Div>
										<Div maxW={960} textCenter fontBold>
											<Div textXl>{pagesWording.index.porfolioIntro.title[locale]}</Div>
										</Div>
										<Div maxW={960} textCenter>
											<Div textLg>{pagesWording.index.porfolioIntro.subtitle[locale]}</Div>
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
						{!isTablet && (
							<Timeline
								target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backgroundColor: "rgba(0, 256, 256, 0.15)" }}></Div>}
							>
								<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 2.5, scaleY: 2.5 }} />
							</Timeline>
						)}
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const SoonilabsCom = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 clx={!isTablet && "transition group hover:transition-all"} py100>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={1500}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div
									absolute
									top0
									triggerHook={1}
									left={isTablet ? "-120%" : "30%"}
									w800
									h800
									rounded3000
									style={{ backgroundColor: "rgba(0, 256, 256, 0.15)" }}
								></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyStart onClick={() => moveTo(urls.soonilabs.index)} cursorPointer>
									<Div imgTag src={IMAGES.main.soonilabsView} w500 my50></Div>
									<Div absolute={!isTablet} top100 right0 clx={"transition group-hover:-translate-y-40"}>
										<Div maxW={400} fontBold mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.soonilabsCom.title[locale]}
										</Div>
										<Div
											maxW={400}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.soonilabsCom.subtitle[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const CommunityObsessed = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 clx={!isTablet && "transition group hover:transition-all"} py100>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={2100}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div absolute triggerHook={1} top0 left={"30%"} w600 h600 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.15)" }}></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyEnd>
									<Div imgTag src={IMAGES.community} w500></Div>
									<Div absolute={!isTablet} top0 left0 clx={"transition group-hover:-translate-y-40"}>
										<Div fontBold maxW={300} mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.values.community.title[locale][0]}
											{isTablet && <br />}
											{pagesWording.index.values.community.title[locale][1]}
										</Div>
										<Div
											maxW={400}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.values.community.desc[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Content = () => {
	return (
		<Controller>
			<Welcome />
			<Introduction />
			<PorfolioIntro />
			<SoonilabsCom />
			<CommunityObsessed />

			<Footer />
		</Controller>
	);
};

export default function Index() {
	return (
		<BasicHeadWrapper>
			<Div relative bgGray100 overflowHidden>
				<TopBar mode={"light"} />
				<Content />
			</Div>
		</BasicHeadWrapper>
	);
}
