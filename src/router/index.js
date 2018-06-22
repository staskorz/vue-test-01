import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import Page2 from "@/components/Page2"
import AddPet from "@/components/AddPet"

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
  ],
})
