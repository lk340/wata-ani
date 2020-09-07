import * as React from "react";

import * as Styled from "./description.styled";
import * as Springs from "./description.springs";
import * as Copies from "./copies";

import star from "@/icons/home/description/star.svg";
import search from "@/icons/home/description/search.svg";
import pencil from "@/icons/home/description/pencil.svg";

export const Description = () => {
	return (
		<Styled.Description>
			<DescriptionBlock
				src={star}
				type="star"
				title={Copies.blockOneTitle}
				body={Copies.blockOneBody}
				link={false}
			/>

			<DescriptionBlock
				src={search}
				type="search"
				title={Copies.blockTwoTitle}
				body={Copies.blockTwoBody}
				link={false}
			/>

			<DescriptionBlock
				src={pencil}
				type="pencil"
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
	src: string;
	type: "star" | "search" | "pencil";
	title: string;
	body: string;
	link: boolean;
};

const DescriptionBlock = (props: BlockProps) => {
	const { src, type, title, body, link } = props;

	const animateBlock = Springs.block();
	const animateIconContainer = Springs.iconContainer();

	return (
		<Styled.DescriptionBlock style={animateBlock}>
			{/* Icon */}
			<Styled.DescriptionBlockIconContainer style={animateIconContainer}>
				<Styled.DescriptionBlockIcon src={src} type={type} />
			</Styled.DescriptionBlockIconContainer>

			{/* Copy */}
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
