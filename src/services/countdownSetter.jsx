import React from 'react';
import { useState, useEffect } from 'react';

export const countdownSetter = () => {
	const [seconds, setSeconds] = useState(3);
	const [minutes, setMinutes] = useState(3);
	const [hours, setHours] = useState(3);
	const [days, setDays] = useState(3);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
		}, 1000);
		if (seconds === 0) {
			setMinutes((pre) => pre - 1);
			setSeconds(3);
		}
		if (minutes === 0) {
			setHours((pre) => pre - 1);
			setMinutes(3);
		}
		if (hours === 0) {
			setDays((pre) => pre - 1);
			return;
		}
		if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
			return;
		}
		return () => clearInterval(interval);
	}, [seconds, minutes, hours, days]);

	return (
		<div>
			<div className="flex gap-5">
				<div>
					<span className="countdown font-mono text-4xl">
						<span style={{ '--value': days }}></span>
					</span>
					days
				</div>
				<div>
					<span className="countdown font-mono text-4xl">
						<span style={{ '--value': hours }}></span>
					</span>
					hours
				</div>
				<div>
					<span className="countdown font-mono text-4xl">
						<span style={{ '--value': minutes }}></span>
					</span>
					min
				</div>
				<div>
					<span className="countdown font-mono text-4xl">
						<span style={{ '--value': seconds }}></span>
					</span>
					sec
				</div>
			</div>
		</div>
	);
};
