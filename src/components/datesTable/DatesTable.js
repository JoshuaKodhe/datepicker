import React from 'react';
import { DateRow } from '../datesRow/DatesRow';
import './DatesTable.css';

export const DatesTable = ({ datesList }) => {
	const dateComponent = datesList.map((date, i) => {
		return (
			<DateRow
				key={date.id}
				id={date.id}
				date={date.date}
				monthLetter={date.monthLetter}
				divisibleBy3={date.divisibleBy3}
			/>
		);
	});
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Date</th>
						<th>Month Letter</th>
						<th>Month Divisible by 3</th>
					</tr>
				</thead>
				<tbody>{dateComponent}</tbody>
			</table>
		</div>
	);
};
