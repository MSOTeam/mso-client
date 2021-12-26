import { atom } from "recoil";

export const sidebarStatus = atom({
  key: "sidebarStatus",
  default: false,
});

export const tokenId = atom({
  key: "tokenId",
  default: '',
});

export const sidebarItemsStatus = atom({
  key: "sidebarItemsStatus",
  default: {},
});

export const articleState = atom({
  key: "articleState",
  default: {},
});


export const deleteArticleState = atom({
  key: "deleteArticleState",
  default: false,
});

export const dataRefreshState = atom({
  key: "dataRefreshState",
  default: false,
});


