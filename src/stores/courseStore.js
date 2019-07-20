import { EventEmitter } from "events";

const CHANGE_EVENT = "change";
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

  emit() {
    this.emit(CHANGE_EVENT);
  }
}
const store = new CourseStore();
export default store;
