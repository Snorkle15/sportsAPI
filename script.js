

async function getScores() {
    try {
        const date = document.getElementById("search").value;
        console.log(date)
        const url = "https://www.omdbapi.com/?&apikey=c0951621&s=" + date;
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)

        

        const scoreHolder = document.getElementById("scoreHolder");

        for (score of json.Search) {
            const div = document.createElement("div");
            div.classList.add("card");
            
         
            const img = document.createElement("img");
            img.src = game.Poster;
            img.width = 100;
            div.append(img);


            const container = document.createElement("div");
            container.classList.add("container");


            div.append(container);
            scoreHolder.append(div);

            const title = document.createElement("h3");
            title.textContent = score.Title;

            const year = document.createElement("p");
            year.textContent = score.Year;

            container.append(title);
            container.append(year);

        }


    }
    catch (error) {
        console.log(error)
    }
}