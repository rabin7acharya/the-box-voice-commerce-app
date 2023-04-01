const products = [
  {
    title: "Windrunner Hoodie",
    description:
      "This is a This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum.",
    price: 100,
    brand: "Nike",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/814a643a-f15e-4ca9-a1ec-f803fd3223ee/sportswear-tech-fleece-windrunner-womens-full-zip-hoodie-7kK8vl.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8a5711ca-1984-45cb-9c96-3a9fc3276b70/sportswear-tech-fleece-windrunner-womens-full-zip-hoodie-7kK8vl.png",
  },

  {
    title: "Product 2",
    description:
      "This is a product lamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum",
    price: 100,
    brand: "Rebook",
    rating: 5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b27cbeef-cfc4-4e47-a1ec-529b275eb5b3/sportswear-therma-fit-adv-tech-pack-mens-engineered-1-2-zip-floral-top-V1Sn59.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ce9637b-863f-4f16-9619-3dacb40bc299/sportswear-therma-fit-adv-tech-pack-mens-engineered-1-2-zip-floral-top-V1Sn59.png",
  },
  {
    title: "Product 3",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Nike",
    rating: 3.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4ba3206-9466-4f6c-8b70-5eb1256c5c6c/sportswear-womens-long-sleeve-crop-top-Q1CwCl.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0a9e4520-82dd-4c6e-8cb5-d91578281575/sportswear-womens-long-sleeve-crop-top-Q1CwCl.png",
  },
  {
    title: "Product 4",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Nike",
    rating: 4,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a8cf29e446b4e6d8c0caed60129fc72_9366/Future_Icons_3-Stripes_Fleece_Full-Zip_Hoodie_Black_HK2158_21_model.jpg",
    image2:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05731442ac94336805baed6012a04bd_9366/Future_Icons_3-Stripes_Fleece_Full-Zip_Hoodie_Black_HK2158_23_hover_model.jpg",
  },
  {
    title: "Product 1",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Nike",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e58e6aea-cd22-4b73-b14d-11bcd3fd042c/forward-crew-mens-crew-C7Nfc6.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/50e616ca-a644-4cba-aefb-d1f38fdeac5b/forward-crew-mens-crew-C7Nfc6.png",
  },
  {
    title: "Product 6",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Rebook",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/777e7542b02946149552aeb000f600b7_9366/DC_x_Reebok_Batmantm_vs._The_Jokertm_T-Shirt_Grey_IB5812_01_standard.jpg",
    image2:
      "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a7e0651b42547f99398aeb000f59ba5_9366/DC_x_Reebok_Batmantm_vs._The_Jokertm_T-Shirt_Grey_IB5812_03_standard_hover.jpg",
  },
  {
    title: "Product 7",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Adidas",
    rating: 5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/62a30954-9c6b-46b7-8647-5b394509259b/sportswear-therma-fit-legacy-mens-hooded-jacket-dpRlXW.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d3e0d68a-7d3f-4e4f-b4e2-e9ef0a0a75a1/sportswear-therma-fit-legacy-mens-hooded-jacket-dpRlXW.png",
  },
  {
    title: "Product 8",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Adidas",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e77efd49-6568-41d3-865c-060dea8fe7d7/sportswear-storm-fit-windrunner-mens-primaloft-jacket-5p3NMK.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/22592aa6-64f6-4151-8b9f-d01f70203b94/sportswear-storm-fit-windrunner-mens-primaloft-jacket-5p3NMK.png",
  },
  {
    title: "Product 9",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Puma",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6f3c8d2c-510b-43b0-8c6e-8c5b01caad05/sportswear-club-fleece-crew-TWcqLw.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/893c698b-2b83-4d58-afe2-d31bb423bdd3/sportswear-club-fleece-crew-TWcqLw.png",
  },
  {
    title: "Product 11",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum.",
    price: 100,
    brand: "Puma",
    rating: 4.5,
    numReviews: 7,
    category: "Wear",
    countInStock: 10,
    image1:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/732d88e0e3c645528c9aaec300f1e9ab_9366/Tiro_Fleece_Mid-Layer_Shirt_Purple_HN5522_21_model.jpg",
    image2:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81bc4200eea94e36aad4aec300f1f0d1_9366/Tiro_Fleece_Mid-Layer_Shirt_Purple_HN5522_23_hover_model.jpg",
  },
  {
    title: "Product 10",
    description:
      "This is a product lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an laborum. is a product",
    price: 100,
    brand: "Rebook",
    rating: 3,
    numReviews: 7,
    category: "Wear",
    countInStock: 0,
    image1:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e6f6a39-a863-4eec-8c11-4a253ba5bfa3/sportswear-essential-windrunner-womens-woven-jacket-4nSRcc.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e7fc2d06-f839-4e2b-b8e0-a3219e4f88cb/sportswear-essential-windrunner-womens-woven-jacket-4nSRcc.png",
  },
];

export default products;
