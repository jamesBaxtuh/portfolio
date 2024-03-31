// Utilities and Constants
import useLocalTime from '../../../../../hooks/useLocalTime';

// Images and Styles
import './Clock.css';

export default function Clock() {
	const daysOfTheWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const localTime = useLocalTime(60000);
	const timeString = localTime.toLocaleTimeString();
	return (
		<time className='d-flex fd-col'>
			<p className='fw-400'>{daysOfTheWeek[localTime.getDay()]}</p>
			<b>
				{timeString.slice(0, timeString.length - 6)}{' '}
				{timeString[timeString.length - 2]}
				{timeString[timeString.length - 1]}
			</b>
			<p>{localTime.toLocaleDateString()}</p>
		</time>
	);
}
