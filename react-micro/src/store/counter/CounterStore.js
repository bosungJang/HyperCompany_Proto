import { makeAutoObservable } from "mobx";

class CounterStore {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    console.log("증가");
    this.number++;
  };

  decrease = () => {
    this.number--;
  };
}

export default CounterStore;