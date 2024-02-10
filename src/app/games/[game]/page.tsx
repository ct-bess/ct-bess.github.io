// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import "./style.css";

interface GameParams {
  params: {
    game: string
  }
}

/**
 * Specifically loads Impact.js games right now
 */
export default function Page( { params }: GameParams ) {

  const [ gameDetails, setGameDetails ] = useState( null );

  useEffect( () => {
    const script = document.createElement( "script" );
    script.src = `/games/${params.game}.js`;
    script.async = true;
    script.id = "demo-game";
    document.body.appendChild( script );

    fetch( `/json/${params.game}.json` ).then( response => response.json() ).then( response => {
      setGameDetails( response );
    });

  });

  return(
    <main>
      <div className="bread-crumbs">
        <a className="link" href="/games">games</a> / <u>{params.game}</u>
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
