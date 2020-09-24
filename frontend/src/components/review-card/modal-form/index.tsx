import * as React from "react";

import * as Styled from "./modal-form.styled";
import * as Springs from "./modal-form.springs";

type Props = {
	isOpen: boolean;
	toggleModalOpen: React.MouseEventHandler;
};

export const ModalForm = (props: Props) => {
	const { isOpen, toggleModalOpen } = props;

	const animateForm = Springs.form(isOpen);

	return (
		<Styled.ModalFormContainer is_open={isOpen.toString()}>
			<Styled.ModalFormContainerOverlay onClick={toggleModalOpen} />
			<Styled.ModalForm style={animateForm}>Modal Form</Styled.ModalForm>
		</Styled.ModalFormContainer>
	);
};
