import Header from "./Components/header/header.tsx";
import HeaderText from "./Components/header/headerText";
import Main from "./Components/main/main";
import Footer from "./Components/footer/footer";
import Navbar from "./Components/navbar/Navbar.tsx";

 
function App() {
  return (
    <>
      <Header />
      <HeaderText headerText="Props er cool" />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}



 
export default App;
 
 