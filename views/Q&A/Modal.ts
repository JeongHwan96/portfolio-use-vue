import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

export default class portfolio extends Vue {
  @Prop() modal: boolean;

  data() {
    return {
      modal: false,
    };
    methods: {
      this.modal = !this.modal;
    }
  }
}
