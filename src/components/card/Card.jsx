import styles from './card.module.css';

const Card = ({ url, h2, text, button, color }) => {
	const cardStyle = `${styles.card} ${styles[color]}`;
	const buttonStyle = `${styles.button} ${styles[color]}`;
	const iconStyle = styles.icon;
	const textStyle = styles.text;
	const titleStyle = styles.title;
	return (
		<div className={cardStyle}>
			<img className={iconStyle} src={url} alt='' />
			<h2 className={titleStyle}>{h2}</h2>
			<p className={textStyle}>{text}</p>
			<button className={buttonStyle}>{button}</button>
		</div>
	);
};

export default Card;
