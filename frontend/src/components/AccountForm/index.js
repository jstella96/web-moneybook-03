import Component from '@/lib/component';
import './index.scss';
import saveButtonIcon from '@/assets/icon/save-button.svg';
import lineIcon from '@/assets/icon/line.svg';

class AccountForm extends Component {
  constructor($target) {
    super($target);
  }
  template() {
    return /*html*/ `
        <form class="account-form">
            <div class="account-form-wrapper">
                <span class="account-form-label">날짜</span>
                <input type="date "class="account-form-input" placeholder="입력해주세요" />
            </div>
            <div class="account-form-wrapper">
                <span class="account-form-label">분류</span>
                <div class="account-form-input">선택하세요</div>
            </div>
            <div class="account-form-wrapper">
                <span class="account-form-label">내용</span>
                <input class="account-form-input" placeholder="입력해주세요" />
            </div>
            <div class="account-form-wrapper">
                <span class="account-form-label">결제수단</span>
                <div class="account-form-input">선택하세요</div>
            </div>
            <div class="account-form-wrapper">
                <span class="account-form-label">금액</span>
                <div class="account-form-amount">
                  <span><img src="${lineIcon}"/></span>
                  <input  class="account-form-input" placeholder="입력해주세요" />
                </div>
            </div>
            <button class="account-form-button"><img src="${saveButtonIcon}"/></button>
        </form>
    `;
  }
  render() {
    const template = this.template();
    this.$target.insertAdjacentHTML('beforeend', template);
  }
}
export default AccountForm;
