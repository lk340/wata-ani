import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./atf.styled";
import * as Springs from "./atf.springs";

export const ATF = () => {
	const animateCopy = Springs.copy();
	const animateCopyBody = Springs.copyBody();
	const animateFormDummy = Springs.formDummy();
	const animateProfileDummy = Springs.profileDummy();

	return (
		<Styled.ATF>
			{/* Copy */}
			<Styled.ATFCopy style={animateCopy}>
				{/* Title */}
				<Styled.ATFCopyTitle>
					Finding an anime to watch doesn’t have to be a pain.
				</Styled.ATFCopyTitle>
				{/* Body */}
				<Styled.ATFCopyBodyContainer>
					<Styled.ATFCopyBody style={animateCopyBody}>
						Many websites and apps give users the power to write and record as lengthy a
						review as they please. Often times, this leads to unnecessarily long and
						convoluted content that just takes up a whole ton of your time. You don’t need
						a college essay to find something worth watching.
					</Styled.ATFCopyBody>
					<Styled.ATFCopyBody style={animateCopyBody}>
						That’s where{" "}
						<Styled.ATFCopyBodyWataAni>わたアニ (WataAni)</Styled.ATFCopyBodyWataAni>{" "}
						comes into play; it’s here to help you find something to watch really quickly.
						Like, one paragraph quickly.
					</Styled.ATFCopyBody>
				</Styled.ATFCopyBodyContainer>
				{/* CTA Button */}
				<Components.CTAButton
					to="/registration"
					text="Get Started"
					customMedia={685}
					customMediaWidth="100%"
				/>
			</Styled.ATFCopy>

			{/* Images */}
			<Styled.ATFImagesContainer>
				{/* Light */}
				<Styled.ATFImagesLight mode={localStorage.mode}>
					<Styled.ATFImagesLightFormDummy style={animateFormDummy} />
					<Styled.ATFImagesLightProfileDummy style={animateProfileDummy} />
				</Styled.ATFImagesLight>
				{/* Dark */}
				<Styled.ATFImagesDark mode={localStorage.mode}>
					<Styled.ATFImagesDarkFormDummy style={animateFormDummy} />
					<Styled.ATFImagesDarkProfileDummy style={animateProfileDummy} />
				</Styled.ATFImagesDark>
			</Styled.ATFImagesContainer>
		</Styled.ATF>
	);
};
