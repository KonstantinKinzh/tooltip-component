import { Tooltip } from '../components/shared/Tooltip';
import './App.scss';

export function App() {

	const TOOLTIP_TITLE = "Спозиционировать по центру, справа, слева, сверх ";

	return (
		<div className="app">
			<Tooltip
				title={TOOLTIP_TITLE}
				postitionContent="right-top"
				backgroundContent="#333"
				classNameContent="tooltip-content"
				visible="show"
			>
				<button style={{ width: "210px", height: "225px" }}>
					Кнопка
				</button>

				{/* <p style={{border: "1px solid #333", padding: "5px", width: "400px", height: "310px", }}>Текст</p> */}
			</Tooltip>
		</div>
	)
};