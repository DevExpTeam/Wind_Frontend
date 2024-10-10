import moment from "moment";


import { RoundaboutLeftSharp } from "@mui/icons-material";

export function calcNumberOfDaysInMonth(
	modelStartDate = "2023-01-01",
	operationStartDate = "2028-01-01",
	operationYears = 40
): number[] {
	let modelStartDateObj = new Date(modelStartDate);
	let operationStartDateObj = new Date(operationStartDate);
	operationStartDateObj.setFullYear(
		operationStartDateObj.getFullYear() + operationYears
	);

	if (modelStartDateObj > operationStartDateObj) {
		const temp = modelStartDateObj;
		modelStartDateObj = operationStartDateObj;
		operationStartDateObj = temp;
	}

	const daysInMonths: number[] = [];

	while (modelStartDateObj < operationStartDateObj) {
		const year = modelStartDateObj.getFullYear();
		const month = modelStartDateObj.getMonth();
		let daysInMonth = new Date(year, month + 1, 0).getDate();

		if (modelStartDateObj.getDate() > 1) {
			daysInMonth -= modelStartDateObj.getDate() - 1;
			modelStartDateObj.setDate(1);
		}

		if (
			modelStartDateObj.getFullYear() ===
			operationStartDateObj.getFullYear() &&
			modelStartDateObj.getMonth() ===
			operationStartDateObj.getMonth() &&
			operationStartDateObj.getDate() !==
			new Date(year, month + 1, 0).getDate()
		) {
			daysInMonth -=
				new Date(year, month + 1, 0).getDate() -
				operationStartDateObj.getDate();
		}

		daysInMonths.push(daysInMonth);
		modelStartDateObj.setMonth(modelStartDateObj.getMonth() + 1);
	}

	return daysInMonths;
}

export function getOperationsAsAPercentOfPeriod({
	modelStartDate = "2023-01-01",
	operationStartDate = "2028-01-01",
	operationYears = 40,
}: {
	modelStartDate?: string;
	operationStartDate?: string;
	operationYears?: number;
}): number[] {
	let modelStartDateObj = new Date(modelStartDate);
	let operationStartDateObj = new Date(operationStartDate);
	operationStartDateObj.setFullYear(
		operationStartDateObj.getFullYear() + operationYears
	);

	if (modelStartDateObj > operationStartDateObj) {
		const temp = modelStartDateObj;
		modelStartDateObj = operationStartDateObj;
		operationStartDateObj = temp;
	}

	const values: number[] = [];

	while (modelStartDateObj < operationStartDateObj) {
		if (
			modelStartDateObj <=
			new Date(
				operationStartDateObj.getFullYear() - operationYears,
				operationStartDateObj.getMonth(),
				operationStartDateObj.getDate()
			)
		) {
			values.push(0);
		} else {
			values.push(1);
		}

		modelStartDateObj.setMonth(modelStartDateObj.getMonth() + 1);
	}

	return values;
}
export function getMonthsNumberFromModelStartDate(
	date1 = "2023-01-01",
	date2 = "2068-06-30"
): number {
	let date1Obj = new Date(date1);
	let date2Obj = new Date(date2);

	date1Obj.setDate(1);
	date2Obj.setDate(1);

	if (date1Obj > date2Obj) {
		const temp = date1Obj;
		date1Obj = date2Obj;
		date2Obj = temp;
	}

	const years = date2Obj.getFullYear() - date1Obj.getFullYear();
	const months = date2Obj.getMonth() - date1Obj.getMonth();

	const monthNumberFromModelStartDate = years * 12 + months + 1;
	return monthNumberFromModelStartDate;
}

export function getAsAPercentOfPeriod(
	startDate: Date | string,
	date1: Date | string,
	date2: Date | string,
	endDate: Date | string
): number[] {
	const arr: number[] = [];
	startDate = new Date(startDate);
	date1 = new Date(date1);
	date2 = new Date(date2);
	endDate = new Date(endDate);

	while (startDate <= endDate) {
		if (startDate >= date1 && startDate <= date2) {
			arr.push(1);
		} else {
			arr.push(0);
		}
		startDate.setMonth(startDate.getMonth() + 1);
	}

	return arr;
}

export function calcDaysInMonth(
	modelStartDate = "2023-01-01",
	operationEndDate = "2024-01-01"
): number[] {
	// Convert strings to Date objects
	let modelStart: Date = new Date(modelStartDate);
	let operationEnd: Date = new Date(operationEndDate);

	// Convert to UTC
	modelStart = new Date(
		Date.UTC(
			modelStart.getFullYear(),
			modelStart.getMonth(),
			modelStart.getDate()
		)
	);
	operationEnd = new Date(
		Date.UTC(
			operationEnd.getFullYear(),
			operationEnd.getMonth(),
			operationEnd.getDate()
		)
	);

	// Ensure modelStartDate is the earlier date
	if (modelStart > operationEnd) {
		const temp: Date = modelStart;
		modelStart = operationEnd;
		operationEnd = temp;
	}

	const daysInMonths: number[] = [];

	while (modelStart < operationEnd) {
		const year: number = modelStart.getUTCFullYear();
		const month: number = modelStart.getUTCMonth();
		let daysInMonth: number = new Date(
			Date.UTC(year, month + 1, 0)
		).getUTCDate(); // Get last day of month

		// If it's the first month, subtract the starting day
		if (modelStart.getUTCDate() > 1) {
			daysInMonth -= modelStart.getUTCDate() - 1;
			modelStart.setUTCDate(1); // Set to the first day of the month
		}

		// If it's the last month and not the last day of the month, subtract the remaining days
		if (
			modelStart.getUTCFullYear() === operationEnd.getUTCFullYear() &&
			modelStart.getUTCMonth() === operationEnd.getUTCMonth()
		) {
			daysInMonth -=
				new Date(Date.UTC(year, month + 1, 0)).getUTCDate() -
				operationEnd.getUTCDate();

			daysInMonths.push(daysInMonth);
			break;
		}

		daysInMonths.push(daysInMonth);

		modelStart.setUTCMonth(modelStart.getUTCMonth() + 1); // Go to the next month
	}

	return daysInMonths;
}

export function calcPeriod(): number {
	const period = getMonthsNumberFromModelStartDate() - 1;
	return period;
}

export function yearlyFlag(
	arr: number[],
	startDate: string
): number[] {
	const startMonth = new Date(startDate).getMonth() + 1;
	const sumArr: number[] = [];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i < 12 - startMonth) {
			sum += arr[i];
			if (i === 11 - startMonth) {
				if (sum > 0) sumArr.push(1);
				else sumArr.push(0);
				sum = 0;
			}
		} else {
			sum += arr[i];
			if ((i - (11 - startMonth)) % 12 === 0) {
				if (sum > 0) sumArr.push(1);
				else sumArr.push(0);
				sum = 0;
			} else if (i === arr.length - 1) {
				if (sum > 0) sumArr.push(1);
				else sumArr.push(0);
			}
		}
	}

	return sumArr;
}

export function normalizeArray(
	array: any[],
	length: number,
	defaultValue?: any
): any[] {
	const array_length = array.length;
	const _d: any = defaultValue || array[array_length - 1];

	for (let i = array_length; i < length; i++) {
		array.push(_d);
	}

	array = array.slice(0, length);
	return array;
}
export function normalizeArrayBySeasonality(
	arr: any[],
	length: number
): any[] {
	const arr_length = arr.length;

	for (let i = arr_length; i < length; i++) {
		arr.push(arr[i - 12]);
	}

	return arr;
}

export function roundArray(
	value: number[],
	numDigits: number
): number[] {
	return value?.map((d) => parseFloat(d.toFixed(numDigits)));
}

export function arrayDivide(
	array1: number[],
	array2: number[]
): number[] {
	return array1.map((d, index) => d / array2[index]);
}

export function roundNumber(
	value: number,
	numDigits: number
): number {
	return parseFloat(value.toFixed(numDigits));
}

export function cumulativeMultiply(arr: number[]): number[] {
	const arrayLength = arr?.length;
	const value: number[] = [];

	for (let i = 0; i < arrayLength; i++) {
		if (i === 0) {
			value[i] = 1;
		} else {
			value[i] = value[i - 1] * (1 + arr[i] / 100);
		}
	}

	return value;
}

export function annualIndexToMonths(array: number[]): number[] {
	const len = array.length;
	const resultArray: number[] = [];

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < 12; j++) {
			resultArray[i * 12 + j] = array[i];
		}
	}

	return resultArray;
}

export function addYears(dateString: string, years: number): string {
	const date: Date = new Date(dateString);
	date.setFullYear(date.getFullYear() + years);
	return date.toISOString().split("T")[0];
}

export function arraySum(
	array1: number[],
	array2: number[]
): number[] {
	return array1.map((d, index) => d + array2[index]);
}
export function addZeros(array: number[], length: number): number[] {
	const array_length = array.length;
	const _d = 0;

	for (let i = array_length; i < length; i++) {
		array.push(_d);
	}

	array = array.slice(0, length);
	return array;
}

export function sumMonthlyValues(
	arr: number[],
	startDate: string
): number[] {
	const startMonth = new Date(startDate).getMonth() + 1;
	const sumArr: number[] = [];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i < 12 - startMonth) {
			sum += arr[i];
			if (i === 11 - startMonth) {
				sumArr.push(sum);
				sum = 0;
			}
		} else {
			sum += arr[i];
			if ((i - (11 - startMonth)) % 12 === 0) {
				sumArr.push(sum);
				sum = 0;
			} else if (i === arr.length - 1) {
				sumArr.push(sum);
			}
		}
	}

	return sumArr;
}

export function expandAndAverage(
	arr: number[],
	num: number
): number[] {
	// Expand array with zeros
	for (let i = 0; i < num; i++) {
		arr.push(0);
	}
	// Create a new array for the averages
	const averages: number[] = [];
	// Calculate average for each element
	for (let i = 0; i < arr.length - num; i++) {
		let sum = 0;
		for (let j = i + 1; j <= i + num; j++) {
			sum += arr[j];
		}
		averages.push(sum / num);
	}
	return averages;
}

export function sumArrays(...arrays: number[][]): number[] {
	const length = arrays[0]?.length;
	const result: number[] = new Array(length).fill(0);

	for (const array of arrays) {
		for (let i = 0; i < length; i++) {
			result[i] += array[i];
		}
	}

	return result;
}

export function multiplyNumber(
	array: number[],
	num: number
): number[] {
	const len = array.length;
	const result = [];
	for (let i = 0; i < len; i++) result[i] = array[i] * num;
	return result;
}

export function nthLargest(
	arr: number[],
	n: number
): { index: number; value: number } {
	const indexedArr = arr.map((e, i) => ({ index: i, value: e }));
	indexedArr.sort((a, b) => b.value - a.value);
	return indexedArr[n - 1];
}

export function multiplyArrays(ararys: number[][]): number[] {
	const length = ararys[0].length;
	const result = new Array(length).fill(1);

	for (const array of ararys) {
		for (let i = 0; i < length; i++) {
			result[i] *= array[i];
		}
	}
	return result;
}

export function sumArray(arr: number[]): number {
	return arr.reduce((a, b) => a + b, 0);
}

export function expandAndSum(arr: number[], num: number): number[] {
	// Create a copy of the original array
	const arrCopy = [...arr];

	// Expand array with zeros
	for (let i = 0; i < num; i++) {
		arrCopy.push(0);
	}

	// Create a new array for the averages
	const sums = [];

	// Calculate average for each element
	for (let i = 0; i < arrCopy.length - num; i++) {
		let sum = 0;
		for (let j = i; j < i + num; j++) {
			sum += arrCopy[j];
		}
		sums.push(sum);
	}

	return sums;
}

export function minArray(arr: number[][]) {
	const result = [];
	for (let i = 0; i < arr[0]?.length; i++) {
		let min = arr[0][i];
		for (let j = 0; j < arr?.length; j++) {
			if (arr[j][i] < min) {
				min = arr[j][i];
			}
		}
		result.push(min);
	}
	return result;
}

export function sum(arr: number[]): number {
	const len = arr.length;
	let sum = 0;
	for (let i = 0; i < len; i++) {
		sum += arr[i];
	}
	return sum;
}

export function npv(rate: number, cashflows: number[]): number {
	let npv = 0;
	const len = cashflows.length;
	const real_rate = Math.pow(1 + rate, 1 / 12);
	for (let i = 0; i < len; i++) {
		npv += cashflows[i] / Math.pow(real_rate, i + 1);
	}
	return npv;
}

export function calcIRR(
	temp_npv: number,
	temp_discount_rate: number,
	cash_flow: number[]
): number {
	const inc = 0.25;
	const dec = -0.25;
	let count = 1;
	while (Math.abs(temp_npv) > 0.01) {
		if (temp_npv > 0) {
			temp_discount_rate = temp_discount_rate * (1 + inc / count);
		} else
			temp_discount_rate = temp_discount_rate * (1 + dec / count);

		temp_npv = npv(temp_discount_rate, cash_flow);
		count++;
	}

	const irr = temp_discount_rate;
	return irr;
}

export function paybackPeriod(
	cashflow: number[],
	payback_start_date_month_number_from_valuation_date: number
): number {
	const len = cashflow.length;
	let sum = 0;
	let i = 0;
	while (i <= payback_start_date_month_number_from_valuation_date) {
		sum += cashflow[i];
		i++;
	}
	while (sum < 0) {
		sum += cashflow[i];
		i++;
	}

	const payback_period = (i + 1) / 12;
	return payback_period;
}

/*Calcs ~~~ 3.04 Live selection*/

/*Calculating inflation index under the given base year and profile*/

export function preProcessArray4Graph(arr: number[] | string[]) {
	return arr.map((a) =>
		Number.isNaN(a)
			? 0
			: typeof a == "number"
				? a.toFixed(2)
				: parseFloat(a).toFixed(2)
	);
}

export const getFilterData = (
	data: number[],
	modelStartDate: string,
	active: string,
	dateRange: { from: string; to: string }
) => {
	if (!Array.isArray(data)) return [];
	const _sIndex = Math.max(
		Math.floor(moment(dateRange.from).diff(moment(modelStartDate), "month") / 6),
		0
	);
	const _lIndex = Math.min(
		data.length,
		Math.floor(moment(dateRange.to).diff(moment(modelStartDate), "month") / 6) + 1
	);
	if (active == "semi_annually")
		return roundArray(data.slice(_sIndex, _lIndex), 1);
	// if (active == "semi_annually") {
	// 	const _mFrom = moment(dateRange.from).get("month");
	// 	const _stIndex = Math.max(
	// 		moment(dateRange.from)
	// 			.set("quarter", _mFrom <= 6 ? 2 : 4)
	// 			.endOf("quarter")
	// 			.diff(modelStartDate, "month"),
	// 		_sIndex
	// 	);
	// 	const rlt = [];
	// 	let tmp = 0;
	// 	for (let i = _sIndex; i < _lIndex; i++) {
	// 		tmp += data[i];
	// 		if ((i - _stIndex) % 6 == 0) {
	// 			rlt.push(tmp);
	// 			tmp = 0;
	// 		}
	// 	}
	// 	rlt.push(tmp);
	// 	return roundArray(rlt, 1);
	// }
	const _stIndex = Math.max(
		moment(dateRange.from)
			.set("quarter", 4)
			.endOf("quarter")
			.diff(modelStartDate, "month"),
		_sIndex
	);
	const rlt = [];
	let tmp = 0;
	for (let i = _sIndex; i < _lIndex; i++) {
		tmp += data[i];
		if ((i - _stIndex) % 12 == 0) {
			rlt.push(tmp);
			tmp = 0;
		}
	}
	rlt.push(tmp);
	return roundArray(rlt, 1);
};

export const getHeaders = (
	modelStartDate: string,
	active: string,
	dateRange: { from: string; to: string },
	formater = "YY-MMM-DD"
) => {
	const _sIndex = Math.max(
		moment(dateRange.from).diff(moment(modelStartDate), "month"),
		0
	);
	const _lIndex =
		moment(dateRange.to).diff(moment(modelStartDate), "month") + 1;
	const result = [];
	if (active == "monthly") {
		result.push(["Period", "Start date", "End date"]);
		for (let i = _sIndex; i < _lIndex; i++) {
			result.push([
				i + 1 - _sIndex,
				moment(modelStartDate)
					.add(i, "month")
					.startOf("months")
					.format(formater),
				moment(modelStartDate)
					.add(i, "month")
					.endOf("months")
					.format(formater),
			]);
		}
	} else if (active == "semi_annually") {
		result.push(["Period", "Start date", "End date"]);
		let ii = 1;
		const _mFrom = moment(dateRange.from).get("month");
		result.push([
			ii++,
			moment(dateRange.from).startOf("months").format(formater),
			moment(dateRange.from)
				.set("quarter", _mFrom < 7 ? 2 : 4)
				.endOf("quarter")
				.format(formater),
		]);
		if (_mFrom < 7) {
			result.push([
				ii++,
				moment(dateRange.from)
					.set("quarter", 3)
					.startOf("quarter")
					.format(formater),
				moment(dateRange.from)
					.set("quarter", 4)
					.endOf("quarter")
					.format(formater),
			]);
		}
		const _mSYear = moment(dateRange.from).get("year");
		const _mLYear = moment(dateRange.to).get("year");
		for (let i = _mSYear + 1; i < _mLYear; i++) {
			result.push([
				ii++,
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.set("quarter", 1)
					.startOf("quarter")
					.format(formater),
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.set("quarter", 2)
					.endOf("quarter")
					.format(formater),
			]);
			result.push([
				ii++,
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.set("quarter", 3)
					.startOf("quarter")
					.format(formater),
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.set("quarter", 4)
					.endOf("quarter")
					.format(formater),
			]);
		}

		const _mTo = moment(dateRange.to).get("month");
		if (_mTo > 6) {
			result.push([
				ii++,
				moment(dateRange.to)
					.set("quarter", 1)
					.startOf("quarter")
					.format(formater),
				moment(dateRange.to)
					.set("quarter", 2)
					.endOf("quarter")
					.format(formater),
			]);
		}
		result.push([
			ii++,
			moment(dateRange.to)
				.set("quarter", _mTo > 6 ? 2 : 4)
				.endOf("quarter")
				.format(formater),
			moment(dateRange.to).endOf("months").format(formater),
		]);
	} else if (active == "annualy") {
		result.push(["Period", "Start date", "End date"]);
		let ii = 1;
		result.push([
			ii++,
			moment(dateRange.from).startOf("months").format(formater),
			moment(dateRange.from).endOf("year").format(formater),
		]);
		const _mSYear = moment(dateRange.from).get("year");
		const _mLYear = moment(dateRange.to).get("year");
		for (let i = _mSYear + 1; i < _mLYear; i++) {
			result.push([
				ii++,
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.startOf("year")
					.format(formater),
				moment(dateRange.from)
					.add(i - _mSYear, "year")
					.endOf("year")
					.format(formater),
			]);
		}
		result.push([
			ii,
			moment(dateRange.to).startOf("year").format(formater),
			moment(dateRange.to).endOf("month").format(formater),
		]);
	}
	return result;
};
export function localeStringArray(arr: number[]) {
	const len: number = arr.length;
	const newArr: string[] = [];
	for (let i = 0; i < len; i++) {
		if (arr[i] < 0)
			newArr.push("(" + (-arr[i]).toLocaleString() + ")");
		else newArr.push(arr[i].toLocaleString());
	}
	return newArr;
}

export function redNumber(num: number) {
	let tempNum = "";
	if (num >= 0) tempNum = num.toLocaleString();
	else tempNum = "(" + (-num).toLocaleString() + ")";
	return tempNum;
}
