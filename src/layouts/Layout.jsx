import SimpleFooter from "../components/SimpleFooter";

function Layout({ children }) {
  return (
    <>

      {children}

      <SimpleFooter />
    </>
  );
}

export default Layout;