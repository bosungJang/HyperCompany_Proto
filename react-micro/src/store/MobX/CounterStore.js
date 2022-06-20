import { action, makeObservable, observable, computed } from "mobx";

class CountStore {
  number = 0;
  title = "TEST";

  constructor() {
    makeObservable(this, {
      number: observable, // 4버전의 @observable와 동일합니다.
      title: observable,
      increase: action, // 4버전의 @action과 동일합니다.
      decrease: action,
      myTitle: computed,
    });
  }

  increase = () => {
    this.number = this.number + 2;
  };
  decrease = () => {
    this.number--;
  };
  get myTitle() {
    return this.title;
  }
  set myTitle(value) {
    this.title = value;
  }
}

export default CountStore;
