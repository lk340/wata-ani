import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Types from "@/utils/types";

import * as Styled from "./modal-form.styled";
import * as Springs from "./modal-form.springs";

type Props = {
	isOpen: boolean;
	toggleModalOpen: React.MouseEventHandler;
};

export const ModalForm = (props: Props) => {
	const { isOpen, toggleModalOpen } = props;

	const { userAgent } = Context.UserAgent.useUserAgentContext();
	const isMobile = userAgent.state.isMobile.toString();

	const [seriesTitle, setSeriesTitle] = React.useState("");
	const [postTitle, setPostTitle] = React.useState("");
	const [review, setReview] = React.useState("");
	const [personalRating, setPersonalRating] = React.useState(0);

	const animateForm = Springs.form();

	function handleChange(event: Types.Input): void {}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		console.log("Submitted!");
	}

	return (
		<Styled.ModalFormContainer is_open={isOpen.toString()}>
			<Styled.ModalFormContainerOverlay onClick={toggleModalOpen} />
			{/* Form */}
			<Styled.ModalFormWrapper>
				<Styled.ModalForm onSubmit={handleSubmit} style={animateForm}>
					{/* Close */}
					<Styled.ModalFormCloseContainer>
						<Components.Spacer height="1px" />
						<Styled.ModalFormClose onClick={toggleModalOpen} />
					</Styled.ModalFormCloseContainer>

					{/* Series Title */}
					<InputGroup title="Series Title" text="Neon Genesis Evangelion" type="input" />

					{/* Post Title */}
					<InputGroup title="Post Title" text="Neon Genesis Evangelion" type="input" />

					{/* Post Content */}
					<InputGroup
						title="Post Content"
						text="People refer to this piece as a timeless classic, but that description alone fails to accurately portray why it has withstood the test of time. Not only are its animation and character designs fluid and bold, but also, it experiments with the human psyche - how we react to our surroundings as people, not as a hyperbolic fictional character. It is this realism that allows us to see ourselves in the characters' shoes. Evangelion has set the standard for its descendants."
						type="textarea"
					/>

					{/* Personal Rating */}
					<PersonalRating rating={8} />

					{/* Submit Button */}
					<Styled.ModalFormSubmit is_mobile={isMobile}>
						Finish Editing
					</Styled.ModalFormSubmit>
				</Styled.ModalForm>
			</Styled.ModalFormWrapper>
		</Styled.ModalFormContainer>
	);
};

// =================== //
// ↓↓↓ Input Group ↓↓↓ //
// =================== //

type InputGroupProps = {
	title: string;
	text: string;
	type: "input" | "textarea";
};

const InputGroup = (props: InputGroupProps) => {
	const { title, text, type } = props;

	const animateInput = Springs.input();

	const typeOutput =
		type === "input" ? (
			<Styled.ModalFormInputField value={text} style={animateInput} />
		) : (
			<Styled.ModalFormTextareaField style={animateInput}>
				{text}
			</Styled.ModalFormTextareaField>
		);

	return (
		<Styled.ModalFormInput>
			<Styled.ModalFormInputTitle>{title}</Styled.ModalFormInputTitle>
			{typeOutput}
		</Styled.ModalFormInput>
	);
};

// ======================= //
// ↓↓↓ Personal Rating ↓↓↓ //
// ======================= //

type PersonalRatingProps = { rating: number };

const PersonalRating = (props: PersonalRatingProps) => {
	const { rating } = props;

	const animateInput = Springs.input();

	return (
		<Styled.ModalFormInput>
			<Styled.ModalFormInputTitle>Personal Rating</Styled.ModalFormInputTitle>
			<Styled.ModalFormPersonalRating>
				<Styled.ModalFormPersonalRatingInput style={animateInput} value={rating} />
			</Styled.ModalFormPersonalRating>
		</Styled.ModalFormInput>
	);
};
