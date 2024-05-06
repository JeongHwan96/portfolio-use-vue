import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Sidebar extends Vue {
  isHide: boolean = true;
  isAbout: boolean = true;
  isEE: boolean = true;
  isreward: boolean = true;
  isqna: boolean = true;

  onClickChangeClass() {
    this.isHide = !this.isHide;
    this.$emit("onClickChangeClass", this.isHide);
  }
  onClickAbout() {
    this.isAbout = !this.isAbout;
    this.$emit("onClickAbout", this.isAbout);
  }
  onClickEE() {
    this.isEE = !this.isEE;
    this.$emit("onClickEE", this.isEE);
  }
  onClickqna() {
    this.isqna = !this.isqna;
    this.$emit("onClickqna", this.isqna);
  }
}
