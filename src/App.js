import Restaurant from "./component/Restaurant";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"


function App() {
  return (
    <>
      <div className="main_wrap h-100 py-4 py-md-5">
          <Restaurant />
      </div>
    </>
  );
}

export default App;
