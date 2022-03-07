import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Detail from "src/components/modals/Detail";
import Footer from "src/components/Footer";
import { PlusCircleIcon } from "@heroicons/react/outline";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import "src/scripts/cursorMove";
import Row from "src/components/Row";
import Col from "src/components/Col";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const teamMembersInfo = [
		{
			name: "Gomz",
			desc: "Pop Art PFP NFT",
			visual: "images/portfolio/gomzNoBg.png",
			isImg: true,
		},
		{
			name: "GomzSpace",
			desc: "2d Metaverse",
			visual: "images/portfolio/gomzSpace.mp4",
			isImg: false,
		},
	];

	return (
		<Div clx={!isTablet && "radial-gradient"}>
			<TopBar mode={"light"}></TopBar>
			<Div pt200 pb100 borderBlack borderB2>
				<Div row={!isTablet} pb100 maxW={1200} mxAuto px30>
					<Div flex itemsEnd leadingNone auto maxW={300} py0>
						<Div textXxl={!isTablet} fontSize60={isTablet} fontBold clx={"colorful colorful2"}>
							Porfolio
						</Div>
					</Div>
				</Div>
				<Div maxW={1200} mxAuto px30>
					{teamMembersInfo.map((content) => {
						return (
							<Row key={content.name} mb50 gapX={50}>
								<Col relative overflowHidden rounded2xl p0 cursorPointer h300 w300 auto>
									{content.isImg ? (
										<Div imgTag src={content.visual} objectCover hFull wFull></Div>
									) : (
										<Div objectCover hFull wFull bgBlack p20>
											<video autoPlay width="100%" muted loop>
												<source src={content.visual} type="video/mp4" />
											</video>
										</Div>
									)}
								</Col>
								<Col flex itemsEnd>
									<Div>
										<Div textXl fontBold my5>
											{content.name}
										</Div>
										<Div textLg>{content.desc}</Div>
									</Div>
								</Col>
							</Row>
						);
					})}
				</Div>
			</Div>
			<Footer />
			<Detail />
		</Div>
	);
};

const Index: NextPage = () => {
	return (
		<BasicHeadWrapper>
			<Content />
		</BasicHeadWrapper>
	);
};

export default Index;