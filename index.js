var btn = document.getElementById("btn");
btn.addEventListener("click", getStash);

function getStash() {
	var date = document.getElementsByClassName("dt");

	const arrHire = new Array();
	for (var i = 0; i < date.length; i++) {
		arrHire[i] = date[i].value.split("-");
	}
	console.log(arrHire);

	const nowDate = new Date();
	var arrNow = new Array();
	arrNow.push(nowDate.getUTCFullYear());
	arrNow.push(nowDate.getUTCMonth() + 1);
	arrNow.push(nowDate.getUTCDate());

	var out = document.getElementsByClassName("output");
	var avgYears = 0;
	var avgMonths = 0;
	var avgDays = 0;
	for (var i = 0; i < out.length; i++) {
		out[i].innerText = "";
		var amountDaysInMonth = new Date(arrHire[i][0], arrHire[i][1], 0).getDate();
		var diffMonth = amountDaysInMonth - arrHire[i][2];
		out[i].innerText += "Years : " + (arrNow[0] - arrHire[i][0]) + "\n";
		avgYears += Number(arrNow[0] - arrHire[i][0]);
		if (arrNow[2] > diffMonth) {
			out[i].innerText += "Month : " + (arrNow[1] - arrHire[i][1] - 1) + "\n";
			out[i].innerText += "Days : " + (diffMonth + arrNow[2] + 1) + "\n";
			avgMonths += Number(arrNow[1] - arrHire[i][1] - 1);
			avgDays += Number(diffMonth + arrNow[2] + 1);
		} else {
			out[i].innerText += "Month : " + (arrNow[1] - arrHire[i][1]) + "\n";
			out[i].innerText += "Days : " + (arrNow[2] - arrHire[i][2]) + "\n";
			avgMonths += Number(arrNow[1] - arrHire[i][1]);
			avgDays += Number(arrNow[2] - arrHire[i][2]);
		}
	}

	var res = document.getElementById("result");
	res.innerText = "Средний стаж \n";
	res.innerText = "AVG Years :" + Math.round(avgYears / arrHire.length) + "\n";
	res.innerText +=
		"AVG Months : " + Math.round(avgMonths / arrHire.length) + "\n";
	res.innerText += "AVG Days : " + Math.round(avgDays / arrHire.length) + "\n";
}
