import ListVideos from "../../components/ListVideos/ListVideos";
import Navbar from "../../components/Navbar/Navbar";
import { pb } from "../../services/PBservices";
import { useLocation } from "wouter";
export default function Home() {
  const [location, navigate] = useLocation();

  function handleLogout() {
    pb.authStore.clear();
    navigate('/login', { replace: true });
  }

  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <Navbar />
      <ListVideos />
    </>
  );
}
