import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Sidebar extends Vue {
  isHide: boolean = true;
  isAbout: boolean = true;
  isEducation: boolean = true;
  isExperience: boolean = true;
  isreward: boolean = true;
  isQandA: boolean = true;

  onClickChangeClass() {
    this.isHide = !this.isHide;
    this.$emit("onClickChangeClass", this.isHide);
  }
  onClickAbout() {
    this.isAbout = !this.isAbout;
    this.$emit("onClickAbout", this.isAbout);
    console.log("isabout", this.isAbout);
  }
}
