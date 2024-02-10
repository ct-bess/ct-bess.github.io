interface AnchorData {
  name: string,
  path: string
}

function createAnchorElements() {
  const pages: Array<AnchorData> = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Games", path: "/games" },
    { name: "Running Stuff", path: "/running" },
    { name: "Contact Me", path: "/contact" }
  ];
  const anchorElements: Array<any> = [];
  pages.forEach( ( page ) => {
    const anchorElement = <a href={page.path} className="site-navigation-link">{page.name}</a>;
    anchorElements.push( anchorElement );
  });
  return( anchorElements );
}

export default function Header() {
  const anchorElements = createAnchorElements();
  return(
    <header>
      <span>Connor Bessell</span> {...anchorElements}
    </header>
  );
}
