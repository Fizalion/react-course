const Layout = ({ children }) => {
  return (
    <main>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
