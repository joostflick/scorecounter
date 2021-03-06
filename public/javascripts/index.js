const team1 = document.getElementById('scoreTeam1')
const team2 = document.getElementById('scoreTeam2')

const status = document.getElementById('status')
status.innerText = 'Currently online & offline supported'

const buttonTeam1Plus = document.getElementById('plusTeam1')
const buttonTeam1Minus = document.getElementById('minusTeam1')
const buttonTeam2Plus = document.getElementById('plusTeam2')
const buttonTeam2Minus = document.getElementById('minusTeam2')

let emailLink = document.getElementById('mailLink')

const buttonReset = document.getElementById('resetButton')

var scoreTeam1 = document.getElementById('scoreTeam1').innerText
var scoreTeam2 = document.getElementById('scoreTeam2').innerText

var online = true

// var formPlusTeam1 = document.getElementById('formPlusTeam1')
// var formMinusTeam1 = document.getElementById('formMinusTeam1')
// var formPlusTeam2 = document.getElementById('formPlusTeam2')
// var formMinusTeam2 = document.getElementById('formMinusTeam2')

function get(path, params) {
  method = 'get'

  var form = document.createElement('form')
  form.setAttribute('method', method)
  form.setAttribute('action', path)

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var hiddenField = document.createElement('input')
      hiddenField.setAttribute('type', 'hidden')
      hiddenField.setAttribute('name', key)
      hiddenField.setAttribute('value', params[key])

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

function resetScore() {
  scoreTeam1 = 0
  scoreTeam2 = 0
  emailLink.href =
    'mailto:uwemail@uwemail.com?subject=Wedstrijdscore&body=Team+1:+0+Team+2:+0'
  team1.innerText = scoreTeam1
  team2.innerText = scoreTeam2
  if (online === true) {
    console.log(scoreTeam1 + scoreTeam2)
    get('/', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  } else {
    console.log(online)
  }
}
init()

function init() {
  buttonTeam1Plus.type = 'button'
  buttonTeam1Minus.type = 'button'
  buttonTeam2Plus.type = 'button'
  buttonTeam2Minus.type = 'button'

  buttonReset.type = 'button'

  resetButton.addEventListener(
    'click',
    function() {
      resetScore()
    },
    false
  )

  buttonTeam1Plus.addEventListener(
    'click',
    function() {
      team1Plus()
    },
    false
  )
  buttonTeam2Plus.addEventListener(
    'click',
    function() {
      team2Plus()
    },
    false
  )
  buttonTeam1Minus.addEventListener(
    'click',
    function() {
      team1Minus()
    },
    false
  )
  buttonTeam2Minus.addEventListener(
    'click',
    function() {
      team2Minus()
    },
    false
  )
}

function updateOffline() {
  online = false
  status.innerText = 'Currently offline'
  console.log('offline')
}

function team1Plus() {
  console.log('team1Plus-offline')
  scoreTeam1++
  if (online == true) {
    get('/updateScore', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  }
  emailLink.href =
    'mailto:uwemail@uwemail.com?subject=Wedstrijdscore&body=Team+1:+' +
    scoreTeam1 +
    '+Team+2:+' +
    scoreTeam2
  team1.innerText = scoreTeam1
}
function team1Minus() {
  if (scoreTeam1 > 0) {
    scoreTeam1--
  } else {
    scoreTeam1 = scoreTeam1
  }
  if (online == true) {
    get('/updateScore', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  }
  emailLink.href =
    'mailto:uwemail@uwemail.com?subject=Wedstrijdscore&body=Team+1:+' +
    scoreTeam1 +
    '+Team+2:+' +
    scoreTeam2
  team1.innerText = scoreTeam1
}
function team2Plus() {
  scoreTeam2++
  if (online == true) {
    get('/updateScore', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  }
  emailLink.href =
    'mailto:uwemail@uwemail.com?subject=Wedstrijdscore&body=Team+1:+' +
    scoreTeam1 +
    '+Team+2:+' +
    scoreTeam2
  team2.innerText = scoreTeam2
}
function team2Minus() {
  if (scoreTeam2 > 0) {
    scoreTeam2--
  } else {
    scoreTeam2 = scoreTeam2
  }
  if (online == true) {
    get('/updateScore', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  }
  emailLink.href =
    'mailto:uwemail@uwemail.com?subject=Wedstrijdscore&body=Team+1:+' +
    scoreTeam1 +
    '+Team+2:+' +
    scoreTeam2
  team2.innerText = scoreTeam2
}

window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which

  if (key == 38) {
    team2Plus()
  } else if (key == 40) {
    team2Minus()
  } else if (key == 87) {
    team1Plus()
  } else if (key == 83) {
    team1Minus()
  }
}

function updateOnline() {
  online = true
  console.log('online')
  console.log('team 1:' + team1)
  console.log('team 2:' + scoreTeam2)
  get('/', { scoreTeam1: scoreTeam1, scoreTeam2: scoreTeam2 })
  buttonTeam1Plus.type = 'submit'
  buttonTeam1Minus.type = 'submit'
  buttonTeam2Plus.type = 'submit'
  buttonTeam2Minus.type = 'submit'

  buttonTeam1Plus.removeEventListener(
    'click',
    function() {
      team1Plus()
    },
    false
  )
  buttonTeam2Plus.removeEventListener(
    'click',
    function() {
      team2Plus()
    },
    false
  )
  buttonTeam1Minus.removeEventListener(
    'click',
    function() {
      team1Minus()
    },
    false
  )
  buttonTeam2Minus.removeEventListener(
    'click',
    function() {
      team2Minus()
    },
    false
  )
}

// Update the online status icon based on connectivity
window.addEventListener('online', updateOnline)
window.addEventListener('offline', updateOffline)
