import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class portfolio extends Vue {
  @Prop() showEE: string;
}
