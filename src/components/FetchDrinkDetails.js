import React from "react";

export function fetchDrinkDetails(drinkId) {
    console.log(drinkId);
    let drinkDetails = [];
    const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId + "";
    fetch(fetchUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
        }
    })
        .then(response => {
            return response.json();
        })
        .then((drinkDtls) => {
            console.log(drinkDtls);
            return drinkDtls;
        });
}