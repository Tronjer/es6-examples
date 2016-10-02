// extend build-in classes
class ConvertableArray extends Array {
	convert() {
		let returnArray = [];
		this.forEach(value => returnArray.push('converted! ' + value));
		return returnArray;
	}
}

let numberArray = new ConvertableArray();
numberArray.push(10);
numberArray.push(20);
numberArray.push(30);


export {ConvertableArray};
