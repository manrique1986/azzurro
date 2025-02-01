import CuartoBloque from "./components/CuartoBloque.jsx";
import PrimerBloque from "./components/PrimerBloque.jsx"
import QuintoBloque from "./components/QuintoBloque.jsx";
import SegundoBloque from "./components/SegundoBloque.jsx"
import TercerBloque from "./components/TercerBloque.jsx"

export default function Home() {
  return (
  <div>
    <PrimerBloque/>
    <SegundoBloque/>
    <TercerBloque/>
    <CuartoBloque/>
    <QuintoBloque/>
  </div>
  );
}
