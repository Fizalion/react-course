import ScrollProgress from "../ScrollProgress/ScrollProgress";

const Layout = ({ children }) => {
  return (
    <main>
      <ScrollProgress />
      <div className="container">
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </div>
    </main>
  );
};

export default Layout;
