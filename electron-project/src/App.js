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
          
              <div type="button" className = "left-pannel-button">
                  <div className = "icon"><i className="fas fa-columns"></i></div>
                </div> 
              <div type="button" className = "left-pannel-button">
                  <div className = "icon"><i className = "fas fa-chart-line"></i></div>
                </div>
              <div type="button" className = "left-pannel-button">
                  <div className = "icon"><i class="fas fa-tasks"></i></div>
                </div>
              <div type="button" className = "left-pannel-button">
                  <div className = "icon"><i class="fas fa-mask" ></i></div>
                </div>
              <div type="button" className = "left-pannel-button">
                  <div className = "icon"><i class="fas fa-search"></i></div> 
                </div>
      
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
