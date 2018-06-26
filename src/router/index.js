import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import Page2 from "@/components/Page2"
import AddPet from "@/components/AddPet"
import PetList from "@/components/PetList"
import PetDetails from "@/components/PetDetails"

Vue.use(Router)

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/page2",
      name: "Page2",
      component: Page2,
    },
    {
      path: "/add-pet",
      name: "AddPet",
      component: AddPet,
    },
    {
      path: "/pet-list",
      name: "PetList",
      component: PetList,
    },
    {
      path: "/pet-details/:petId",
      name: "PetDetails",
      component: PetDetails,
    },
  ],
})
