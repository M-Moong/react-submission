function RotateButton({ Message }) {

	function randomDirection(Message) {
		return Message[parseInt(Math.random() * 4)];
	}

	return (
		<>
			<button type="button">
				<img src={randomDirection(Message)} alt="" />
			</button>
		</>
	);
}

export default RotateButton;