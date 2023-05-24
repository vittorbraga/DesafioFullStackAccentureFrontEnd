import { createWebHistory, createRouter } from "vue-router";

const routes =  [
//   {
//     path: "/",
//     alias: "/tutorials",
//     name: "tutorials",
//     component: () => import("./components/TutorialsList")
//   },
  {
    path: "/fornecedors",
    name: "fornecedors",
    component: () => import("./components/fornecedor/ListFornecedor")
  },
  {
    path: "/add-fornecedor",
    name: "add-fornecedors",
    component: () => import("./components/fornecedor/AddFornecedor")
  },
  {
    path: "/edit-fornecedor/:id",
    name: "edit-fornecedor",
    component: () => import("./components/fornecedor/AddFornecedor")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;