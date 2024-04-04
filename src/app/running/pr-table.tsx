interface PRData {
  name: string,
  date: string,
  time: string,
  age: string,
  resultLink: string,
  blogLink: string
}

function createTableBody( jsonFileName: string ) {

  const prData: Array<PRData> = require( `../../../public/json/${jsonFileName}.json` );

  // This is VeRY messy
  const prTableRows: Array<any> = [];
  let oddIteration = true, iterations = 1;
  let prTime: Number = Number.MAX_SAFE_INTEGER;

  // find the fastest time in the least optimal and confusing way possible
  // I should really use the client here ...
  prData.forEach( pr => {
    const currentTime: Number = parseInt( pr.time?.replaceAll( ":", "" ) )
    const isNewPRTime: Boolean = currentTime < prTime;
    if( isNewPRTime ) {
      prTime = currentTime;
    }
  });

  prData.forEach( pr => {

    const currentTime: Number = parseInt( pr.time?.replaceAll( ":", "" ) )
    let rowClassName = oddIteration ? "odd-table-row" : "even-table-row";
    let timeClassName = iterations == prData.length ? "table-bottom-left" : "";
    if( currentTime === prTime && jsonFileName !== "other" ) {
      rowClassName = "pr-row";
      timeClassName += "pr-row";
    }

    prTableRows.push(
      <tr className={rowClassName}>
        <td id="0" className={timeClassName}>{pr.time}</td>
        <td id="1">M-{pr.age}</td>
        <td id="2">{pr.name}</td>
        <td id="3">{pr.date}</td>
        <td id="4" className={iterations == prData.length ? "table-bottom-right" : ""}>
          <a className="link" href={pr.resultLink}>Results</a>
          { !!pr?.blogLink ? <span><br/><a className="link" href={pr.blogLink}>Blog</a></span> : <></> }
        </td>
      </tr>
    );
    ++iterations;
    oddIteration = !oddIteration;
  });

  return( prTableRows );
}

export default function PRTable( jsonFileName: string, displayNameAs: string ) {
  const prRows = createTableBody( jsonFileName );
  return(
    <table className="center" key={jsonFileName}>
      <thead>
        <tr>
          <th id="0" scope="col" className="table-top-left">Finish Time</th>
          <th id="1" scope="col">Gender-Age</th>
          <th id="2" scope="col">Race: {!!displayNameAs ? displayNameAs : jsonFileName}</th>
          <th id="3" scope="col">Date</th>
          <th id="4" scope="col" className="table-top-right">Links</th>
        </tr>
      </thead>
      <tbody>
        {...prRows}
      </tbody>
    </table>
  );
}
