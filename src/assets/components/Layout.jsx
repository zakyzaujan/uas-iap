import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Layout({ children }) {
  const { pathname } = useLocation();
  const showSearch = pathname.startsWith("/meals");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="sticky top-16 z-30 flex justify-center pb-4">
        {showSearch && (
          <div className="sticky top-16 z-30 flex justify-center pb-4">
            <div className="inline-block rounded-lg">
              <SearchBar />
            </div>
          </div>
        )}
      </div>
      <main className="flex-1 flex flex-col container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
