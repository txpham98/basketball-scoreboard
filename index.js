let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

// Set starting score for home and guest teams
let homeScore = 0;
let guestScore = 0;
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;


// Calculate Home Team Score
function addOnePointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    leadingTeam();
}

function addTwoPointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    leadingTeam();
}

function addThreePointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    leadingTeam();
}

// Calculate Guest Team Score
function addOnePointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    leadingTeam();
}

function addTwoPointsGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    leadingTeam();
}

function addThreePointsGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    leadingTeam();
}

// Reset Points 
function resetGame() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    leadingTeamEl.textContent = "Leading Team: "
}

let leadingTeamEl = document.getElementById("leadingTeam");

function leadingTeam() {
    if (guestScore > homeScore) {
        leadingTeamEl.textContent = "Leading Team: Guest";
    }
    else if (homeScore > guestScore){
        leadingTeamEl.textContent = "Leading Team: Home";
    }
    else {
        leadingTeamEl.textContent = "Leading Team: Tie"
    }
}