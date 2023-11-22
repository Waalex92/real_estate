import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
			onClick={() => setIsOpen(!isOpen)}>
			<GrTag />
			<div>
				<p>Rango de precio</p>
				<p className="text-xs">Selecciona tu rango de precio</p>
			</div>
			{isOpen ? <GrFormUp /> : <GrFormDown />}
			{isOpen && (
				<div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg w-[230px] left-0">
					<p>Cualquier rango</p>
					<p>15.000$ - 25.000$</p>
					<p>25.000$ - 35.000$</p>
					<p>45.000$ - 55.000$</p>
					<p>55.000$ - 65.000$</p>
				</div>
			)}
		</div>
	);
}
