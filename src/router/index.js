import Vue from "vue";
import VueRouter from "vue-router";
import CommunityRewards from "../views/CommunityRewards.vue";
import CommunityRewardsDAT from "../views/CommunityRewardsDAT.vue";
import CommunityRewardsDSTApprove from "../views/CommunityRewardsDSTApprove.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/layouts/home/Index.vue"),
    children: [
      {
        path: "",
        name: "Rewards",
        component: CommunityRewards
      },
      {
        path: "/dat",
        name: "RewardsDAT",
        component: CommunityRewardsDAT
      },
      {
        path: "/dst",
        name: "RewardsDST",
        component: CommunityRewardsDSTApprove
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});

export default router;
