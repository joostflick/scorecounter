const team1 = document.getElementById('scoreTeam1')
const team2 = document.getElementById('scoreTeam2')

let scoreTeam1 = 0
let scoreTeam2 = 0
team1.innerText = scoreTeam1
team2.innerText = scoreTeam2

function team1Plus() {
	scoreTeam1++
	team1.innerText = scoreTeam1
}
function team1Minus() {
	if (scoreTeam1 > 0) {
		scoreTeam1--
	} else {
		scoreTeam1 = scoreTeam1
	}
	team1.innerText = scoreTeam1
}
function team2Plus() {
	scoreTeam2++
	team2.innerText = scoreTeam2
}
function team2Minus() {
	if (scoreTeam2 > 0) {
		scoreTeam2--
	} else {
		scoreTeam2 = scoreTeam2
	}
	team2.innerText = scoreTeam2
}
