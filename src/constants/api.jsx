const URLS = {
  userToken: '',
  HOST_URL: 'https://superadmin.mandreducation.in',
  SUFFIX_URL: '/api/v1',
  DASHBOARD: () => `/admins/dashboard`,
  GET_PLAN: () => `/plans`,
  GET_ADMINS: () => `/organizations`,
  ADD_PLAN: () => `/plans`,
  EDIT_PLAN: id => `/plans/${id}`,
  EDIT_ADMIN: id => `/superadmin/admins/${id}`,
  UPDATE_PLAN: id => `/plans/${id}`,
  DELETE_PLAN: id => `/plans/${id}`,
  UPDATE_USERNAME: () => `/change-username`,
  UPDATE_PHONE: () => `/change-phone`,
  UPDATE_EMAIL: () => `/change-email`,
  UPDATE_PASSWORD: () => `/change-password`,
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  GET_PROFILE: '/profile',
  UPDATE_PROFILE: '/profile/update',
  CHANGE_PASSWORD: '/change-password',
  FORGOT_PASSWORD: '/password/email',
  RESET_PASSWORD: token => `/password/reset?token=${token}`,
  ADD_ADMIN: () => `/superadmin/admins`,
  UPDATE_ADMIN: id => `/admins/${id}`,
  UPDATE_STUDENT_COUNT: id => `/superadmin/admins/student-count/${id}`,
  ADD_ADMIN_PLAN: id => `/superadmin/admins/add-plan/${id}`,
  ADD_ADMIN_FEATURES: id => `/superadmin/admins/admins/add-features/${id}`,
  DELETE_ADMIN: id => `/superadmin/admins/${id}`,
  MAKE_PAYMENT: () => '/make-payment',
  ADD_FEATURE: () => `/features`,
  GET_FEATURES: () => `/features`,
  FEATURE_BY_ID: id => `/features/${id}`,
  UPDATE_FEATURE: id => `/features/${id}`,
  DELETE_FEATURE: id => `/features/${id}`,
  ADD_QUESTION_BANK: () => `/addQuestions`,
  GET_QUESTION_BANK: () => `/questionbanks`,
  GET_ALL_COURSESDATA: () => `/getallcoursedata`,
  EDIT_QUESTION_BANK: id => `/questionbanks/edit/${id}`,
  UPDATE_QUESTION_BANK: id => `/questionbanks/${id}`,
  DELETE_QUESTION_BANK: id => `/questionbanks/${id}`,
  ADD_COURSE: () => `/courses`,
  GET_COURSE: () => `/courses`,
  COURSE_BY_ID: id => `/courses/${id}`,
  UPDATE_COURSE: id => `/courses/${id}`,
  DELETE_COURSE: id => `/courses/${id}`,
  ADD_SUBJECT: () => `/subjects`,
  GET_SUBJECT: () => `/subjects`,
  SUBJECT_BY_ID: id => `/subjects/${id}`,
  UPDATE_SUBJECT: id => `/subjects/${id}`,
  DELETE_SUBJECT: id => `/subjects/${id}`,
  ADD_CHAPTER: () => `/chapters`,
  GET_CHAPTER: () => `/chapters`,
  CHAPTER_BY_ID: id => `/chapters/${id}`,
  UPDATE_CHAPTER: id => `/chapters/${id}`,
  DELETE_CHAPTER: id => `/chapters/${id}`,
  GET_CONTENT: () => `/materials`,
  CONTENT_BY_ID: id => `/materials/${id}`,
  ADD_LANGUAGES: () => `/languages`,
  GET_LANGUAGES: () => `/languages`,
  EDIT_LANGUAGES: id => `/languages/${id}`,
  UPDATE_LANGUAGES: id => `/languages/${id}`,
  DELETE_LANGUAGES: id => `/languages/${id}`,
  ADD_ACADEMIC_YEAR: () => `/academic-years`,
  GET_ACADEMIC_YEAR: () => `/academic-years`,
  EDIT_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  UPDATE_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  DELETE_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  GET_ORGANIZATION: () => `/organizations`,
  GET_BANNER: () => `/banners`,
  ADD_BANNER: () => `/banners`,
  EDIT_BANNER: id => `/banners/${id}`,
  UPDATE_BANNER: id => `/banners/${id}`,
  DELETE_BANNER: id => `/banners/${id}`,
  GET_NOTIFICATIION: userType => `/notifications?user_type=${userType}`,
  ADD_NOTIFICATION: () => `/notifications`,
  EDIT_NOTIFICATION: id => `/notifications/${id}`,
  DELETE_NOTIFICATION: id => `/notifications/${id}`,
  GET_PAYMENT_HISTORY: () => `/get-payment-history`,
};
export default URLS;
