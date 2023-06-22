import { Component } from "react";
import './Footer.css';

class Footer extends Component  {
  render() {
    return (
       <footer id="footer">
        <div class="container">
          <div class="text-center">
            &copy; Copyright <strong>Gabriel Santos</strong>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;