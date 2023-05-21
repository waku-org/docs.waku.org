import React from "react";

const PoweredByCard = ({ appLink, logoSrc, logoAlt, children }) => (
	<div
		style={{
			width: "100%",
			border: "1px solid #666",
			borderRadius: "8px",
			padding: "1.5em"
		}}
	>
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundColor: "#fff",
			marginBottom: "1em"
		}}>
			<img
				src={logoSrc}
				alt={logoAlt}
				style={{
					height: "55px",
					padding: "5px"
				}}
			/>
		</div>
		<p>{children}</p>
		<a href={appLink} target="_blank" rel="noopener noreferrer">
			<button
				style={{
					width: "100%",
					padding: "1em",
					borderRadius: "8px",
					backgroundColor: "#e6f6ff",
					border: "1px solid #666",
					fontSize: "16px",
					fontWeight: 700,
					cursor: "pointer",
					color: "#3578e5"
				}}
			>
				Visit Application&nbsp;
				<svg width="16" height="16" aria-hidden="true" viewBox="0 0 24 24">
					<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
					</path>
				</svg>
			</button>
		</a>
	</div>
);

export default PoweredByCard;
