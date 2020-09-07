import * as React from "react";

import * as Styled from "./description.styled";
import * as Springs from "./description.springs";
import * as Copies from "./copies";

export const Description = () => {
	return (
		<Styled.Description>
			<DescriptionBlock
				title={Copies.blockOneTitle}
				body={Copies.blockOneBody}
				link={false}
			/>
			<DescriptionBlock
				title={Copies.blockTwoTitle}
				body={Copies.blockTwoBody}
				link={false}
			/>
			<DescriptionBlock
				title={Copies.blockThreeTitle}
				body={Copies.blockThreeBody}
				link={true}
			/>
		</Styled.Description>
	);
};

// ========================= //
// ↓↓↓ Description Block ↓↓↓ //
// ========================= //

type BlockProps = {
	title: string;
	body: string;
	link: boolean;
};

const DescriptionBlock = (props: BlockProps) => {
	const { title, body, link } = props;

	const animateBlock = Springs.block();
	const animateIcon = Springs.icon();

	return (
		<Styled.DescriptionBlock style={animateBlock}>
			<Styled.DescriptionBlockCopy>
				<Styled.DescriptionBlockTitle>{title}</Styled.DescriptionBlockTitle>
				<Styled.DescriptionBlockBody>{body}</Styled.DescriptionBlockBody>
				<Styled.DescriptionBlockLink to="/registration" display={link.toString()}>
					Learn More
				</Styled.DescriptionBlockLink>
			</Styled.DescriptionBlockCopy>
		</Styled.DescriptionBlock>
	);
};
