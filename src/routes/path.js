function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '';

const PATH_DASHBOARD = {
  Material: {
    content: path(ROOTS_DASHBOARD, '/material'),
    'add-course': path(ROOTS_DASHBOARD, '/material/add/course'),
    'add-chapter': path(ROOTS_DASHBOARD, '/material/add/chapter'),
    'add-subject': path(ROOTS_DASHBOARD, '/material/add/subject'),
    'add-content': path(ROOTS_DASHBOARD, '/material/addContent'),
  },
  Admins: {
    adminList: path(ROOTS_DASHBOARD, '/admins'),
    addAdmin: path(ROOTS_DASHBOARD, '/admin/add-admin'),
    view: id => path(ROOTS_DASHBOARD, `/admin/view/${id}`),
  },
  organization: {
    organizationList: path(ROOTS_DASHBOARD, '/organization'),
    addOrganization: path(ROOTS_DASHBOARD, '/organization/add-organization'),
    view: id => path(ROOTS_DASHBOARD, `/organization/view/${id}`),
  },
};

export default PATH_DASHBOARD;
