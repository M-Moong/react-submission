import RotateButton from "./RotateButton";
import east from "../assets/direction-east.svg";
import west from "../assets/direction-west.svg";
import south from "../assets/direction-south.svg";
import north from "../assets/direction-north.svg";

const Message = [
	east, west, south, north
];



function Compass() {

	return (
		<>
			<h1>오늘의 방향은?</h1>
			<p>새로고침시 방향이 변경됩니다.</p>
			<RotateButton Message={Message} />
		</>
	);
}

export default Compass;