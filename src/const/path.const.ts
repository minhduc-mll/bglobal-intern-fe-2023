import type { RouteRecordRaw } from "vue-router";
import SignupViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import SigninViewVue from "@/views/AdminViews/Signin/SigninView.vue";
import ForgotPasswordViewVue from "@/views/AdminViews/ForgotPassword/ForgotPasswordView.vue";
import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import SeekersViewVue from "@/views/AdminViews/Seekers/SeekersView.vue";
import HiringOrganizationViewVue from "@/views/AdminViews/HiringOrganization/HiringOrganizationView.vue";
import NewsViewVue from "@/views/AdminViews/News/NewsView.vue";
import AddNewsViewVue from "@/views/AdminViews/AddNews/AddNewsView.vue";
import UserProfileViewVue from "@/views/AdminViews/UserProfile/UserProfileView.vue";
import UpdateProfileViewVue from "@/views/AdminViews/UpdateProfile/UpdateProfileView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";
import SignUp from "@/views/UserViews/Signup/SignUp.vue";
import JobList from "@/views/UserViews/JobList/JobList.vue";

export class PathConst {
  public static adminSignup: Route = {
    path: "/admin/signup",
    name: "adminSignup",
    component: SignupViewVue,
    meta: {
      title: "title.admin.signup",
    },
  };

  public static adminSignin: Route = {
    path: "/admin/signin",
    name: "adminSignin",
    component: SigninViewVue,
    meta: {
      title: "title.admin.signin",
    },
  };

  public static adminForgot: Route = {
    path: "/admin/password/forgot",
    name: "adminForgot",
    component: ForgotPasswordViewVue,
    meta: {
      title: "title.admin.forgotPassword",
    },
  };

  public static adminDashboard: Route = {
    path: "/admin",
    name: "adminDashboard",
    component: DashboardViewVue,
    meta: {
      title: "title.admin.dashboard",
    },
  };

  public static adminSeekers: Route = {
    path: "/admin/seekers",
    name: "adminSeekers",
    component: SeekersViewVue,
    meta: {
      title: "title.admin.seekers",
    },
  };

  public static adminOrganization: Route = {
    path: "/admin/organization",
    name: "adminOrganization",
    component: HiringOrganizationViewVue,
    meta: {
      title: "title.admin.hiringOrganization",
    },
  };

  public static adminNews: Route = {
    path: "/admin/news",
    name: "adminNews",
    component: NewsViewVue,
    meta: {
      title: "title.admin.news",
    },
  };

  public static adminAddNews: Route = {
    path: "/admin/news/add",
    name: "adminAddNews",
    component: AddNewsViewVue,
    meta: {
      title: "title.admin.addNews",
    },
  };

  public static adminUserProfile: Route = {
    path: "/admin/user/profile",
    name: "adminUserProfile",
    component: UserProfileViewVue,
    meta: {
      title: "title.admin.userProfile",
    },
  };

  public static adminUpdateProfile: Route = {
    path: "/admin/user/profile/update",
    name: "adminUpdateProfile",
    component: UpdateProfileViewVue,
    meta: {
      title: "title.admin.updateProfile",
    },
  };

  public static home: Route = {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: {
      title: "title.user.home",
    },
  };
  public static userSignup: Route = {
    path: "/signup",
    name: "Signup",
    component: SignUp,
    meta: {
      title: "title.user.signup",
    },
  };
  public static jobList: Route = {
    path: "/joblist",
    name: "JobList",
    component: JobList,
    meta: {
      title: "title.user.joblist",
    },
  };
}

export type Route = RouteRecordRaw;
