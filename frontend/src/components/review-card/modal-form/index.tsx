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
			<Styled.ModalForm onSubmit={handleSubmit} style={animateForm}>
				{/* Close */}
				<Styled.ModalFormCloseContainer>
					<Components.Spacer height="1px" />
					<Styled.ModalFormClose onClick={toggleModalOpen} />
				</Styled.ModalFormCloseContainer>

				{/* Series Title */}
				<InputGroup title="Series Title" value="Neon Genesis Evangelion" />

				{/* Submit Button */}
				<Styled.ModalFormSubmit is_mobile={isMobile}>
					Finish Editing
				</Styled.ModalFormSubmit>
			</Styled.ModalForm>
		</Styled.ModalFormContainer>
	);
};

// =================== //
// ↓↓↓ Input Group ↓↓↓ //
// =================== //

type InputGroupProps = {
	title: string;
	value: string;
};

const InputGroup = (props: InputGroupProps) => {
	const { title, value } = props;

	const animateInput = Springs.input();

	return (
		<Styled.ModalFormInput>
			<Styled.ModalFormInputTitle>{title}</Styled.ModalFormInputTitle>
			<Styled.ModalFormInputField value={value} style={animateInput} />
		</Styled.ModalFormInput>
	);
};

// =================== //
// ↓↓↓ Form Rating ↓↓↓ //
// =================== //
