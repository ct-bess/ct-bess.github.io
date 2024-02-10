// @ts-nocheck
import { toFullMonth } from "../../toFullMonth";
import entries from "../../../../../public/json/blog-entries.json";
import staticParams from "../../../../../public/json/blog-static-params.json";
import "../../style.css";

interface BlogParams {
  params: {
    year: string,
    month: string,
    entry: string
  }
}

export function generateStaticParams() {
  return( staticParams["[year]/[month]"] );
}

/**
 *
 */
export default function Page( { params }: BlogParams ) {

  const fullMonth = toFullMonth( params.month );


  return(
    <main>
      <div className="blog-bread-crumbs">
        <a className="link" href="/blog">blog</a> / <a className="link" href={`/blog/${params.year}`}>{params.year}</a> / <u>{fullMonth}</u>
      </div>
      <div className="blog-selector">
        <ul>
          { entries?.find( entry => entry.year === params.year ).months[fullMonth].map( blog =>
            <li key={blog.name}>
              <a className="link" href={blog.path}>
                {blog.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}
