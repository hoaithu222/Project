

const backendDomain = "http://localhost:8080";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomain}/api/user-logout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/updateUserRole`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  getProduct: {
    url: `${backendDomain}/api/all-product`,
    method: "get"
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post"
  },
  getCategoryProduct: {
    url: `${backendDomain}/api/get-category`,
    method: "get"
  },
  getCategoryWiseProduct: {
    url: `${backendDomain}/api/category-product`,
    method: "post"
  },
};

export default SummaryApi;