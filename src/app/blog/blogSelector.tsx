// @ts-nocheck
import entries from "../../../public/json/blog-entries.json";

/**
 * this is a beauty, isn't it?
 * Possibly add filtering, maybe a depth variable too.
 * And maybe some fancy CSS hiding/unhiding animation for clicking to drill down.
 */
export default function BlogSelector() {

  return(
    <ul className="blog-selector">
      { entries.map( entry =>
        <li key={entry.year}>
          {entry.year}
          <ul key={entry.id}>
              { Object.entries( entry.months ).map( ( month ) =>
                <li key={entry.id + "-" + month[0]}>
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
        </li>
      )}
    </ul>
  );

}
