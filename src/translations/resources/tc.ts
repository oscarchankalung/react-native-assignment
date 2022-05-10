const tc = {
  screens: {
    login: '登入',
    articleCategoryList: '物品類別清單',
    articleItemList: '物品清單',
    articleItemDetail: '物品',
  },
  login: {
    username: '用戶名',
    password: '密碼',
    login: '登入',
  },
  async: {
    loading: '加載中',
  },
  form: {
    requiredUsername: '請輸入用戶名',
    requiredPassword: '請輸入密碼',
  },
};

export type LanguageStrings = typeof tc;
export default tc;
