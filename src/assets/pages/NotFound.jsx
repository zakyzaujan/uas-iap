import { useNavigate } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";
import { Button } from "../components/ui/button";
import useTitle from "@/hooks/useTitle";

const NotFound = () => {
  const navigate = useNavigate();

  useTitle("404 Not Found");

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <img
        src="/404.png"
        alt="404 Not Found"
        className="sm:w-1/5 w-7/8 -mt-40"
      />
      <Button
        className={"-mt-8 cursor-pointer"}
        size={"lg"}
        onClick={() => navigate("/")}
      >
        <ArrowBigLeftDash />
        Kembali ke Profil
      </Button>
    </div>
  );
};

export default NotFound;
