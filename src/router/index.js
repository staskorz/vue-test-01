import Vue from "vue"
import Router from "vue-router"
import AddPet from "@/components/AddPet"
import PetList from "@/components/PetList"
import PetDetails from "@/components/PetDetails"

Vue.use(Router)

export default new Router({
  /* global process:false */
  base: process.env.NODE_ENV === "production" ? "/vue-test-01/" : "/",

  mode: "history",

  routes: [
    {
      path: "/",
      name: "PetList",
      component: PetList,
    },
    {
      path: "/add-pet",
      name: "AddPet",
      component: AddPet,
    },
    {
      path: "/pet-details/:petId",
      name: "PetDetails",
      component: PetDetails,
    },
  ],
})
