import * as React from "react";

import * as Types from "@/utils/types";

import * as Styled from "./modal-form.styled";
import * as Springs from "./modal-form.springs";

type Props = {
	isOpen: boolean;
	toggleModalOpen: React.MouseEventHandler;
};

export const ModalForm = (props: Props) => {
	const { isOpen, toggleModalOpen } = props;

	const [seriesTitle, setSeriesTitle] = React.useState("");
	const [postTitle, setPostTitle] = React.useState("");
	const [review, setReview] = React.useState("");
	const [personalRating, setPersonalRating] = React.useState(0);

	const animateForm = Springs.form();

	function handleChange(event: Types.Input): void {}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();
	}

	return (
		<Styled.ModalFormContainer is_open={isOpen.toString()}>
			<Styled.ModalFormContainerOverlay onClick={toggleModalOpen} />
			<Styled.ModalForm style={animateForm}>Modal Form</Styled.ModalForm>
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

	return (
		<Styled.ModalFormInput>
			<Styled.ModalFormInputTitle>{title}</Styled.ModalFormInputTitle>
			<Styled.ModalFormInputField />
		</Styled.ModalFormInput>
	);
};
