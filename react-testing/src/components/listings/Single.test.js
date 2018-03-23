import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Single from "./Single";

const item = {
    "Actors": "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths",
    "Awards": "Nominated for 3 BAFTA Film Awards. Another 11 wins & 42 nominations.",
    "BoxOffice": "$261,835,892",
    "Country": "UK, USA, Germany",
    "DVD": "11 Apr 2003",
    "Director": "Chris Columbus",
    "Genre": "Adventure, Family, Fantasy",
    "Language": "English",
    "Metascore": "63",
    "Plot": "Forced to spend his summer holidays with his muggle relations, Harry Potter gets a real shock when he gets a surprise visitor: Dobby the house-elf, who warns Harry Potter against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobby's warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening: Harry is suddenly hearing mysterious voices from inside the walls, muggle-born students are being attacked, and a message scrawled on the wall in blood puts everyone on his/her guard - \"The Chamber Of Secrets Has Been Opened. Enemies Of The Heir, Beware\" .",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
    "Production": "Warner Bros. Pictures",
    "Rated": "PG",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "63/100"
      }
    ],
    "Released": "15 Nov 2002",
    "Response": "True",
    "Runtime": "161 min",
    "Title": "Harry Potter and the Chamber of Secrets",
    "Type": "movie",
    "Website": "http://harrypotter.warnerbros.com/",
    "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
    "Year": "2002",
    "imdbID": "tt0295297",
    "imdbRating": "7.4",
    "imdbVotes": "444,553"
  };

describe("Single snapshots", () => {
  test("Single Snapshot test", () => {
    const component = renderer.create(<Single item={item} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
