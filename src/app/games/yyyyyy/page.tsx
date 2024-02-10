// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import "./style.css";

/**
 * If I ever make another Impact.js game, export some of this functionality
 * Since this is hosted on Github pages and we need to generate static content, we won't be able to run client side and generate static params
 * hence we'll have static pages for each game I suppose
 */
export default function Page() {

  const [ gameDetails, setGameDetails ] = useState( null );

  useEffect( () => {
    const script = document.createElement( "script" );
    script.src = "/games/yyyyyy.js";
    script.async = true;
    script.id = "demo-game";
    document.body.appendChild( script );

    fetch( "/json/yyyyyy.json" ).then( response => response.json() ).then( response => {
      setGameDetails( response );
    });

    return () => {
      // we don't need this, right?
      // document.removeChild( document.getElementById( "demo-game" ) );
    };

    // DO NOT OMIT THE FUNNY DEPENDENCY ARRAY
  }, []);

  return(
    <main>
      <div className="bread-crumbs">
        <a className="link" href="/games">games</a> / <u>yyyyyy</u>
      </div>
      <div className="game-container">
        <div className="game-details">
          {
            !!gameDetails?.description && (
            <>
              <p>
                {gameDetails.description}
              </p>
              <br/>
            </>
          )}
          {
            !!gameDetails?.controls && (
            <span>
              Controls:
              <ul className="game-details-list">
                { Object.entries( gameDetails.controls ).map( control => 
                  <li key={control[0]}><b>{control[0]}</b> - {control[1]}</li>
                )}
              </ul>
              <br/>
            </span>
          )}
          {
            !!gameDetails?.links && (
            <span>
              Further reading:
              <ul className="game-details-list">
                { Object.entries( gameDetails.links ).map( link => 
                  <li key={link[1]}><a className="link" href={link[1]}>{link[0]}</a></li>
                )}
              </ul>
            </span>
          )}
        </div>
        <canvas id="canvas" className="demo-game"></canvas>
      </div>
    </main>
  );
}
