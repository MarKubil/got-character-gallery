import React from "react";
import Character from "./Character";
import peopleInfo from "../data/characterData.json"

const CharacterGallery = () => {
    const characterArray = peopleInfo.map(character => <Character {...character} key={character._id}/>)
    return (
        <div data-test="component-char-gallery">
            {characterArray}
        </div>
    )
}
//"component-char-gallery"

export default CharacterGallery;