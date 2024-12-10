import styles from './box.module.css';

const Box = ({ children }) => {
	const boxStyle = styles.container;
	return <div className={boxStyle}>{children}</div>;
};

export default Box;
