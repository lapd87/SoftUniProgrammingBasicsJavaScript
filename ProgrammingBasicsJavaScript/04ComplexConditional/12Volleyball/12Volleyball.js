function volleyball([arg1,arg2,arg3]) {
    let yearType = arg1.toLowerCase();
    let hollidays = Number(arg2);
    let weekendsHome = Number(arg3);

    let weekendsSofia = 48 - weekendsHome;

    let sofiaGames = weekendsSofia * 3 / 4;
    let homeGames = weekendsHome;
    let hollidayGames = hollidays * 2 / 3;

    let games = sofiaGames + homeGames + hollidayGames;

    if (yearType=="leap") {
        games *= 1.15;
    }

    console.log(Math.trunc(games));
}

volleyball(["leap", "0", "1"]);