import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";
import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateContext } from "../../context/DateProviderContext";
const DateRangePickerComp = () => {
	const { setSDate, setEDate } = React.useContext(DateContext);
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);

	// open close
	// const [open, setOpen] = useState(true);

	// get the target element to toggle
	const refOne = useRef(null);

	// useEffect(() => {
	// 	// event listeners
	// 	document.addEventListener("keydown", hideOnEscape, true);
	// 	document.addEventListener("click", hideOnClickOutside, true);
	// }, []);

	// hide dropdown on ESC press
	// const hideOnEscape = (e) => {
	// 	// console.log(e.key)
	// 	if (e.key === "Escape") {
	// 		setOpen(false);
	// 	}
	// };

	// // Hide dropdown on outside click
	// const hideOnClickOutside = (e) => {
	// 	// console.log(refOne.current)
	// 	// console.log(e.target)
	// 	if (refOne.current && !refOne.current.contains(e.target)) {
	// 		setOpen(false);
	// 	}
	// };
  setSDate(format(range[0].startDate, "dd/MM/yyyy"));
  setEDate(format(range[0].endDate, "dd/MM/yyyy"));

	console.log(
    "from dateRangePickerComp",
		`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
			range[0].endDate,
			"dd/MM/yyyy"
		)}`
	);
	return (
		<div className='calendarWrap'>
			{/* <input
				value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
					range[0].endDate,
					"MM/dd/yyyy"
				)}`}
				readOnly
				className='inputBox'
				// onClick={() => setOpen((open) => !open)}
			/> */}

			<div ref={refOne}>
				<DateRangePicker
					onChange={(item) => setRange([item.selection])}
					editableDateInputs={true}
					moveRangeOnFirstSelection={false}
					ranges={range}
					months={2}
					direction='horizontal'
					className='calendarElement'
				/>
			</div>
		</div>
	);
};

export default DateRangePickerComp;
