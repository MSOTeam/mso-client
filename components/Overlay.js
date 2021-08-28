import usePortal from "react-cool-portal";
import styled, { css } from 'styled-components';
import { EditSidebar } from '../util/icon';
import { useEffect, useState } from "react";

const Overlay = ({ children, visibility, tag }) => {
	const { Portal, isShow, show, hide, toggle } = usePortal({
		defaultShow: false, // The default visibility of portal, default is true
		onShow: (e) => {
			// Triggered when portal is shown
			// The event object will be the parameter of "show(e?)"
		},
		onHide: (e) => {
			// Triggered when portal is hidden
			// The event object will be the parameter of "hide(e?)", it maybe MouseEvent (on clicks outside) or KeyboardEvent (press ESC key)
		},
	});

	useEffect(() => {
	}, []);

	return (
		<>
			<div onClick={show}><EditSidebar /></div>
			<Portal>
				<Wrapper show={show}>
					<Edit>						
						<Box>
							<h2>Edit category: {children}</h2>
							<Change>
								<p>Change or add a tag</p>
								<input />
							</Change>
							<Change>
								<p>Add collaborators</p>
								<input />
							</Change>
							<Change>
								<p>Tag visibility</p>
								<input />
							</Change>
							<Action>
								<button />
							</Action>
						</Box>
					</Edit>
					<Background />
				</Wrapper>
			</Portal>
		</>
	);
};

const Wrapper = styled.div`
  display: none;
  ${({ show }) => css`
    ${show &&
		css`
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 1;
    `}
  `};
`;

const Action = styled.div``;

const Edit = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	height: 100%;
`;

const Box = styled.div`
	background: white;
	width: 400px;
	height: 500px;
	border-radius: 8px;
	color: black;
	padding: 20px 30px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Change = styled.div`
width: 100%;
`;


const Background = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	background: #5649CF;
	opacity: .8;
`;

export default Overlay;