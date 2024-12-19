

const backendDomain = "http://localhost:8080";
// const backendDomain = import.meta.env.VITE_SERVER_API;

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
  getProductDetail: {
    url: `${backendDomain}/api/product-details`,
    method: "post"
  },
  addToCardProduct: {
    url: `${backendDomain}/api/add-card`,
    method: "post"
  },
  getCard: {
    url: `${backendDomain}/api/get-card`,
    method: "get"
  },
  addToCardViewProduct: {
    url: `${backendDomain}/api/view-card-product`,
    method: "get"
  },
  updateCardProduct: {
    url: `${backendDomain}/api/update-card`,
    method: "post"
  },
  deleteCardProduct: {
    url: `${backendDomain}/api/delete-card-product`,
    method: "post"
  },
  searchProduct: {
    url: `${backendDomain}/api/search`,
    method: "get"

  },
  filterProduct: {
    url: `${backendDomain}/api/filter-product`,
    method: "post"

  },
  payment: {
    url: `${backendDomain}/api/checkout`,
    method: "post"
  }
};

export default SummaryApi;