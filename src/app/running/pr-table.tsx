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

  const prTableRows: Array<any> = [];
  let oddIteration = true, iterations = 1;
  prData.forEach( pr => {
    prTableRows.push(
      <tr className={oddIteration ? "odd-table-row" : "even-table-row"}>
        <td id="0" className={iterations == prData.length ? "table-bottom-left" : ""}>{pr.time}</td>
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
