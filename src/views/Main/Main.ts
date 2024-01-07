import Vue from "vue";
import { Component } from "vue-property-decorator";
import SideBarCom from "../../common/Sidebar.vue";
import Port1 from "../../common/portfolio.vue";
import About from "../About/About.vue";

@Component({
  components: {
    SideBarCom,
    Port1,
    About,
  },
})
export default class SidebarComponent extends Vue {
  child: string = "";
  aboutchild: string = "";
  propsdata: string = this.child;
  aboutdata: string = this.aboutchild;

  gotchild(child: any) {
    this.child = child; // 위에 선언한 child의 값은 emit으로 받은 child
    this.propsdata = this.child;
  }

  gotabout(aboutchild: any) {
    this.aboutchild = aboutchild;
    this.aboutchild = this.aboutchild;
  }
}
