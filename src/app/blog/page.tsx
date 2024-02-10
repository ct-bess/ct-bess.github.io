import BlogSelector from "./blogSelector";
import "./style.css";

export default function MyBlog() {
  return(
    <main>
      <div className="blog-bread-crumbs">
        <u>blog</u> /
      </div>
      <div className="inline-blog-container">
        <BlogSelector/>
      </div>
    </main>
  );
}
