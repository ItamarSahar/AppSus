export function BgColorInput({ type, name, handleStyleChange }) {
	const colors = ['#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1']

	return (
		<div className="colors-container">
			pick Bg  color
			{colors.map((color) => (
				<div
					className="color"
					key={color}
					style={{ backgroundColor: color }}
					onClick={() => handleStyleChange('backgroundColor', color)}
				></div>
			))}
		</div>
	)
}
