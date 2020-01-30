import React from 'react';

import moment from 'moment';
import DatePicker from 'react-datepicker';

import { dates, monthLetters } from './dates';
import { DatesTable } from './components/datesTable/DatesTable';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class Date extends React.Component {
	constructor() {
		super();
		this.state = {
			startDate: '',
			dates: dates,
		};
	}

	handleChange = date => {
		this.setState({
			startDate: date,
		});
	};

	getMonthNumber = date => {
		const month = 1 + moment(date, 'DD MMM YYYY').month();
		return month;
	};

	isDivisibleBy3 = date => {
		return this.getMonthNumber(date) % 3 === 0 ? 'True' : 'False';
	};

	getMonthLetter = date => {
		const num = this.getMonthNumber(date);
		const monthName = moment(num, 'M').format('MMM');
		if (monthLetters[monthName]) {
			return monthLetters[monthName];
		}
	};

	handleSubmit = () => {
		const { dates, startDate } = this.state;
		const divisiblility = this.isDivisibleBy3(startDate);

		const stringDate = moment(startDate).format('DD MMM YYYY');
		const monthLetter = this.getMonthLetter(startDate);
		const newDate = {
			id: dates.length + 1,
			date: stringDate,
			monthLetter: monthLetter,
			divisibleBy3: divisiblility,
		};
		dates.push(newDate);
		this.setState({ ...this.state, startDate: '', dates });
	};

	render() {
		const { dates } = this.state;
		return (
			<div className='App'>
				<div className='Date-picker'>
					<h4>Click the form to provide date</h4>
					<DatePicker
						selected={this.state.startDate}
						onChange={this.handleChange}
						dateFormat='dd MMM yyyy'
						placeholderText='click to select date'
					/>
					<button onClick={this.handleSubmit} disabled={!this.state.startDate}>
						Add Date
					</button>
					<DatesTable datesList={dates} />
				</div>
			</div>
		);
	}
}

export default Date;
