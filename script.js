

async function getScores() {
    try {
        const date = document.getElementById("search").value;
        console.log(date)
        const url = "https://api.balldontlie.io/v1/games?dates[]=" + date;
        const response = await fetch(url, {
            headers: {
                "Authorization": "6effcc51-24cb-4950-92dd-b8fbc1a7f193"
            }
        });
        const json = await response.json()
        console.log(json)

        

        const scoreHolder = document.getElementById("scoreHolder");

        for (game of json.data) {
            const div = document.createElement("div");
            div.classList.add("card");

            const container = document.createElement("div");
            container.classList.add("container");


            div.append(container);
            scoreHolder.append(div);

            const title = document.createElement("h3");
            title.textContent = game.home_team.full_name + " vs " + game.visitor_team.full_name;

            const score = document.createElement("p");
            score.textContent = game.home_team_score + " - " + game.visitor_team_score;

            const status = document.createElement("p");
            status.textContent = game.status;

            container.append(title);
            container.append(score);
            container.append(status);

        }


    }
    catch (error) {
        console.log(error)
    }
}