import moment from 'moment';
import React, { useState } from 'react';

function App() {
	const [birth, setBirth] = useState('')
	const [today, setToday] = useState(moment().format('YYYY-MM-DD'))

	const changeBirthHandler = (e) => {
		setBirth(e.target.value)
	}

	const changeTodayHandler = (e) => {
		setToday(e.target.value)
	}

	function getYearsMonthsDays(date1, date2) {
		const a = moment(date1);
		const b = moment(date2);
		var years = a.diff(b, 'year');
		b.add(years, 'years');

		const noOfDaysInb = b.daysInMonth();
		const noOfDaysIna = a.daysInMonth();
		let months = 0;
		if (noOfDaysInb > noOfDaysIna) {
			months = b.diff(a, "months");
			a.add(months, "months");
		} else {
			months = a.diff(b, 'months');
			b.add(months, 'months');
		}
		var days = a.diff(b, 'days');

		var totalYears = Math.abs(years);
		var totalMonths = Math.abs(months);
		var totalDays = Math.abs(days);

		if (totalMonths == 0 && totalDays == 0 && totalYears > 0) {
			return `Happy Birthday! 🎉 You're ${totalYears} years old!`;
		}

		return `${totalYears} Years ${totalMonths} Months ${totalDays} Days`;
	}

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
			<div className="md:w-2/5 w-10/12">
				<h1 className="text-white text-3xl text-center mb-3 font-sans font-semibold">Age Calculator</h1>
				<div className="flex flex-col rounded mx-auto bg-gray-500 px-6 py-8 w-full">
					<label className="block text-white text-sm font-bold mb-2" htmlFor="birth">
						Birthday
					</label>
					<input value={birth.length > 0 ? birth : today} onChange={changeBirthHandler} type="date" name="birth" id="birth" className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full" placeholder="Birthday" />

					<label className="block text-white text-sm font-bold mb-2" htmlFor="today">
						Today
					</label>
					<input value={today} onChange={changeTodayHandler} type="date" name="today" id="today" className="bg-white p-3 rounded mb-3 focus:outline-none focus:ring-2 ring-blue-500 w-full" placeholder="Today" />


					<h3 className="text-center lg:text-2xl md:text-lg text-base font-semibold text-white">
						{birth.length > 0 && today.length > 0 ? getYearsMonthsDays(birth, today) : ''}
					</h3>
				</div>
			</div>
		</div>
	);
}

export default App;
