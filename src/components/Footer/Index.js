import { Component } from "react";
import './Footer.css';

class Footer extends Component  {
  render() {
    return (
       <footer id="footer2">
        <div className="container">
          <div className="text-center">
            &copy; Copyright <strong>Gabriel Santos</strong>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;