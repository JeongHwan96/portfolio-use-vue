import Vue from "vue";
import { Component } from "vue-property-decorator";
import SideBarCom from "../../common/Sidebar.vue";
import Port1 from "../../common/portfolio.vue";
import About from "../About/About.vue";
import EE from "../EE/EE.vue";
import EE2 from "../EE2/EE2.vue";
import QnA from "../Q&A/Q&A.vue";

@Component({
  components: {
    SideBarCom,
    Port1,
    About,
    EE,
    EE2,
    QnA,
  },
})
export default class SidebarComponent extends Vue {
  child: string = "";
  aboutchild: string = "";
  eechild: string = "";
  qnachild: string = "";
  propsdata: string = this.child;
  aboutdata: string = this.aboutchild;
  eedata: string = this.eechild;
  qnadata: string = this.qnachild;

  gotchild(child: any) {
    this.child = child; // 위에 선언한 child의 값은 emit으로 받은 child
    this.propsdata = this.child;
  }

  gotabout(aboutchild: any) {
    this.aboutchild = aboutchild;
    this.aboutchild = this.aboutchild;
  }
  gotEE(eechild: any) {
    this.eechild = eechild;
    this.eechild = this.eechild;
  }

  gotqna(qnachild: any) {
    this.qnachild = qnachild;
    this.qnachild = this.qnachild;
  }
}
