import { useState, useEffect, type CSSProperties, type PropsWithChildren } from "react";
import { classNames } from "../../../utils/classNames";
import "./Tooltip.scss";

interface IPropsTooltip {
	styleWrapp?: CSSProperties;
	styleContent?: CSSProperties;
	classNameWrapp?: string;
	classNameContent?: string;
	postitionContent?: TPositionContent;
	title: string;
	visible?: "show" | "hide";
	backgroundContent?: string;
	isToggleClick?: boolean;
};

type TPositionContent =
	"left"
	| "right"
	| "top"
	| "bottom"
	| "left-top"
	| "right-top"
	| "left-bottom"
	| "right-bottom"
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right";

export const Tooltip = ({
	styleWrapp,
	styleContent,
	classNameWrapp,
	classNameContent,
	postitionContent = "top",
	title,
	isToggleClick = false,
	visible,
	backgroundContent,
	children
}: PropsWithChildren<IPropsTooltip>) => {

	//* Состояние показа/скрытия tooltip
	const [isOpenContent, setIsOpenContent] = useState("hide");

	//* Функции 
	//* Функция обработки состояния - isOpenContent
	const onToggleVisibility = () => {
		isOpenContent === "hide" ? setIsOpenContent("show") : setIsOpenContent("hide");
	};

	//* Классы
	const classesWrapp = classNames("tooltip", classNameWrapp);
	const classesArrow = classNames("arrow", `arrow-${postitionContent}`);
	const classesChildren = classNames("children", isToggleClick && "toggleable");
	const classesContent = classNames(
		classNameContent,
		"tooltip-content",
		`tooltip-content-${postitionContent}`,
		visible,
		isToggleClick && "no-hover",
		isToggleClick && isOpenContent,

	);

	//* Эффект сброса состояния isOpenConten при изменении isToggleClick
	useEffect(() => {
		setIsOpenContent("hide");
	}, [isToggleClick]);


	//* JSX-разметка 
	return (
		<div style={styleWrapp} className={classesWrapp} onClick={onToggleVisibility}>

			{/* Обернутый элемент */}
			<div className={classesChildren}>
				{children}
			</div>

			{/* Всплывающая подсказка */}
			<div onClick={(e) => e.stopPropagation()} style={{ background: backgroundContent, ...styleContent }} className={classesContent}>
				{title}

				{/* Стрелка */}
				<span style={{ background: backgroundContent }} className={classesArrow} />

			</div>
		</div>
	);
};