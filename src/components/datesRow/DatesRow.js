import React from 'react';

export const DateRow = ({ id, date, monthLetter, divisibleBy3 }) => {
	return (
		<tr key={id}>
			<td>{id}</td>
			<td>{date}</td>
			<td>{monthLetter}</td>
			<td>{divisibleBy3}</td>
		</tr>
	);
};
