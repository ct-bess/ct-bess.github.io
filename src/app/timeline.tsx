import tableData from "../../public/json/timeline.json"
import Image from "next/image";

function createTableBody() {

  const tableRows: Array<any> = [];
  let key: number = 0;

  tableData.forEach( tableDataRow => {

    tableRows.push(
      <tr key={key}>
        <td>
          <p>{tableDataRow.startDate}</p>
          &#8593;
          <p>{tableDataRow.endDate}</p>
        </td>
        <td>
          <Image 
            src={tableDataRow.image.src}
            alt={tableDataRow.image.alt}
            className="timeline-image picture-bubble"
            width={150} height={150}
          />
        </td>
        <td className="light-black-background">
          <p><u>{tableDataRow.company} - {tableDataRow.location}</u></p>
          <p>{tableDataRow.title}</p>
          <p>{tableDataRow.job}</p>
        </td>
        <td>
          { !!tableDataRow?.skills && tableDataRow.skills.map( skill =>
            <p key={key} className="float-item margin-left">
              {skill.name}
              <Image
                src={skill.logoPath}
                alt={skill.name + "logo"}
                className="float-right"
                width={48} height={48}
              />
            </p>
          )}
        </td>
      </tr>
    );
    ++key;
    tableRows.push(
      <tr key={key}>
        <td></td>
        <td>
          <span className="thicc">&#8593;</span>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
    ++key;
  });
  tableRows.pop();
  return( tableRows );
}

export default function Timeline() {
  const tableBody = createTableBody();
  return(
    <table className="center timeline" key="timeline-table">
      <tbody>
        {...tableBody}
      </tbody>
    </table>
  );
}
