import './index.scss';

import fileTextIcon from '@/assets/icon/file-text.svg';
import calendarIcon from '@/assets/icon/calendar.svg';
import chartIcon from '@/assets/icon/chart.svg';

import MonthController from './monthController';

export default class Header {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  template() {
    return `
      <div class="header">
        <a is="my-anchor" href="/" class="header-title" >우아한 가계부</a>
        <div class="month-controller" ></div>
        <div class='nav'>
          <a class="nav-main" is="my-anchor" href="/"><img src="${fileTextIcon}"></a> 
          <a class="nav-calendar" is="my-anchor" href="/calendar"><img src="${calendarIcon}"></a>
          <a class="nav-statistic" is="my-anchor" href="/statistic"><img src="${chartIcon}"></a>
        </div>
      </div>
  `;
  }

  render() {
    this.$target.innerHTML = this.template();
    const $monthController = this.$target.querySelector('.month-controller');
    new MonthController($monthController);
  }
}
