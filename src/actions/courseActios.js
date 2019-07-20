import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actioTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: actioTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
