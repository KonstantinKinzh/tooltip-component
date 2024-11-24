export const classNames = (...modules:any) => {
	return modules.filter((module:any) => typeof module === "string").join(" ");
};