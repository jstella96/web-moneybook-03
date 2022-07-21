class Router {
  constructor() {
    this.currentActivePage = null;
    this.routes = [
      { path: /^\/$/, element: () => console.log('메인페이지 렌더!') },
      { path: /^\/calendar$/, element: () => console.log('달력페이지 렌더!') },
      { path: /^\/statistic$/, element: () => console.log('통계페이지 렌더!') },
    ];

    this.#init();
  }

  static getCurrentPath() {
    if (!window.location) return '/';

    return window.location.pathname;
  }

  static navigate(to) {
    const historyChangeEvent = new CustomEvent('historychange', {
      detail: {
        to,
      },
    });

    dispatchEvent(historyChangeEvent);
  }

  #route() {
    const targetPage = this.routes.find((route) => route.path.test(Router.getCurrentPath()));
    if (!targetPage) {
      /**
       * TODO :: NOT FOUND PAGE 인스턴스 호출 or 메인페이지로 fallback
       */
      console.log('NOT FOUND!');
      return;
    }

    targetPage.element();
  }

  #init() {
    window.addEventListener('historychange', ({ detail: { to } }) => {
      const shouldReplaced = Router.getCurrentPath === to;

      if (shouldReplaced) history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      this.#route();
    });

    window.addEventListener('popstate', () => {
      this.#route();
    });

    this.#route();
  }
}

export default Router;
