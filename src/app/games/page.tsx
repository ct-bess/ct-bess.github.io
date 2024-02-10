import games from "../../../public/json/games.json";
import Image from "next/image";

/**
 */
export default function Page() {

  return(
    <main>
      <div className="bread-crumbs">
        <u>games</u> /
      </div>
        <table className="center sneaky-table" key="game-table">
          <tbody>
            { games.map( game =>
              <tr key={game.name}>
                <td key={0}>
                  <a href={game.sitePath}>
                    <Image src={game.thumbnailPath} alt={game.name + " game thumbnail"} width={140} height={140}/>
                  </a>
                </td>
                <td key={1}>
                  <a className="link" href={game.sitePath}>{game.name}</a>
                </td>
                <td key={2}>
                  {game.description}
                </td>
              </tr>
            )}
          </tbody>
        </table>
    </main>
  );
}
