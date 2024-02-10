// @ts-nocheck
import entries from "../../../../public/json/blog-entries.json";
import "../style.css";

interface BlogParams {
  params: {
    year: string,
    month: string,
    entry: string
  }
}

/**
 */
export default function Page( { params }: BlogParams ) {

  return(
    <main>
      <div className="blog-bread-crumbs">
        <a className="link" href="/blog">blog</a> / <u>{params.year}</u>
      </div>
      <div className="blog-selector">
        <ul>
          { Object.entries( entries?.find( entry => entry.year === params.year ).months ).map( month =>
            <li key={params.year + "-" + month[0]}>
              <ul>
              {month[0]}
                { month[1].map( blog => 
                  <li key={blog.name}>
                    <a className="link" href={blog.path}>
                      {blog.name}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}

