import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className = "contianer">
        <div className = "left-container">
          <div className = "left-iner-container-top">
            <h1 className = "logo">
              vile
            </h1>
          </div>
          <div className = "left-iner-container-bottom">
          
              <div type="button" className = "left-pannel-button">dahshboard</div> 
              <div type="button" className = "left-pannel-button">analytics</div>
              <div type="button" className = "left-pannel-button">tasks</div>
              <div type="button" className = "left-pannel-button">proxies</div>
              <div type="button" className = "left-pannel-button">search terms</div>
      
          </div>
        </div>
        <div className = "right-container">
            <div className = "right-iner-container-upper">
              <h1 className = "logo">
                title
              </h1>

            </div>
            <div className = "right-iner-container-lower">
              <h1 className = "logo">
                title
              </h1>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
