import React, { Component } from 'react';
import click2 from './sounds/click2.mp3';
import click3 from './sounds/click3.mp3';

class DarkmodeToggle extends Component {
  state = {
    darkmode: false,
  }

  componentDidMount() {
    const bodyTheme = document.querySelector('.bodyTheme')
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      bodyTheme.dataset.bsTheme = 'dark';
      const input = document.querySelectorAll('.text-dark');
      input.forEach((elem) => {
        elem.classList.remove('text-dark');
        elem.classList.add('text-light');
      })
      this.setState({
        darkmode: true,
      })
    } else {
        document.documentElement.classList.remove('dark');
        bodyTheme.dataset.bsTheme = 'light';
        const input = document.querySelectorAll('.text-light');
        input.forEach((elem) => {
          elem.classList.remove('text-light');
          elem.classList.add('text-dark');
        })
        this.setState({
          darkmode: false,
        })
    }
  }

  handleCheckboxChange = ({ target: { checked } }) => {
    const bodyTheme = document.querySelector('.bodyTheme')

    if (checked) {
      const audio = new Audio(click2);
      audio.play()
      bodyTheme.dataset.bsTheme = 'dark';
      const input = document.querySelectorAll('.text-dark');
      input.forEach((elem) => {
        elem.classList.remove('text-dark');
        elem.classList.add('text-light');
      })
      localStorage.theme = 'dark'
    } else {
      const audio = new Audio(click3);
      audio.play()
      bodyTheme.dataset.bsTheme = 'light';
      const input = document.querySelectorAll('.text-light');
      input.forEach((elem) => {
        elem.classList.remove('text-light');
        elem.classList.add('text-dark');
      })
      localStorage.theme = 'light'
    }
    this.setState((prevState) => ({
      darkmode: !prevState.darkmode,
    }));
  };

  render() {
    const { darkmode } = this.state;
    return (
      <div>
        <label className="flex cursor-pointer">
          <input
            type="checkbox"
            id="dark-mode-checkbox"
            className="sr-only peer"
            checked={ darkmode }
            onChange={this.handleCheckboxChange}
          />
          <div
            className={`peer ${
              darkmode ? 'bg-moon after:animate-moonAnimation bg-zinc-500 after:bg-zinc-800' : 'bg-sun after:animate-sunAnimation bg-zinc-300 after:bg-zinc-100'
            } after:bg-[length:14px_14px] after:bg-no-repeat after:bg-center after:transition-all after:duration-300 after:left-0 peer-checked:after:left-6 w-14 h-8 rounded-full px-1 flex items-center after:rounded-full after:content-[''] after:flex after:relative after:w-6 after:h-6 shadow-inner after:shadow-custom peer-checked:after:shadow-customwhite after:rotate-180 peer-checked:after:rotate-0`}
          />
        </label>
      </div>
    );
    
  }
}

export default DarkmodeToggle;