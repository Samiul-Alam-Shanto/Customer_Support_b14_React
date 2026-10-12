import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import { Suspense } from "react";
import Loading from "./components/Loading";

const dataPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <MainLayout dataPromise={dataPromise()} />
      </Suspense>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
