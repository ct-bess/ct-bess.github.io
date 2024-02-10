// @ts-nocheck
import { toFullMonth } from "../../../toFullMonth";
import staticParams from "../../../../../../public/json/blog-static-params.json";
import "../../../style.css";

interface BlogParams {
  params: {
    year: string,
    month: string,
    entry: string
  }
}

export function generateStaticParams() {
  return( staticParams["[year]/[month]/[entry]"] );
}

/**
 * this route will display our blog content
 */
export default function Page( { params }: BlogParams ) {

  // This seems like a bad thing to do
  const entry = require( `../../../${params.year}/${params.month}/${params.entry}.tsx` );
  const entryName = entry.metadata?.displayEntryAs || params.entry;
  const fullMonth = toFullMonth( params.month );

  return(
    <main>
      <div className="blog-bread-crumbs">
        <a className="link" href="/blog">blog</a> / <a className="link" href={`/blog/${params.year}`}>{params.year}</a> / <a className="link" href={`/blog/${params.year}/${params.month}`}>{fullMonth}</a> / <u>{entryName}</u>
      </div>
      <div className="blog-container">
        { entry.blogPage() }
      </div>
    </main>
  );
}
