import Vue from 'vue';
import VueRouter from "vue-router";


import Main from "../view/Main";
import Login from "../view/Login";

import UserList from "../view/user/List";
import UserProfile from "../view/user/Profile";
import NotFound from "../view/NotFound";




Vue.use(VueRouter);


export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/main/:name',
      component: Main,
      props:true,
      children: [
        {
          path: '/user/profile/:id/:name',
          name:'UserProfile',
          props:true,

          component: UserProfile
        },

        {
          path: '/user/list',
          component: UserList
        },
      ]
    },
    {
      path: '/login',
      name: "login",
      component: Login,
    },{
    path: '/goHome',
      redirect:'/main'
    },
    ,{
      path: '*',
     component: NotFound
    },


  ]


});
