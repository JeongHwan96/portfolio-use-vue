import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class portfolio extends Vue {
  @Prop() showQnA: string;

  data() {
    return {
      is_show: false,

      items: [
        {
          num: 1,
          title: "어떠한 계기로 QA직무를 하게 되었나요?",
          writer: "관리자",
          date: "2024 - 03 - 07",
        },
        {
          num: 2,
          title: "어떠한 계기로 QA직무를 하게 되었나요?",
          writer: "관리자",
          date: "2024 - 03 - 07",
        },
        {
          num: 3,
          title: "어떠한 계기로 QA직무를 하게 되었나요?",
          writer: "관리자",
          date: "2024 - 03 - 07",
        },
        {
          num: 4,
          title: "어떠한 계기로 QA직무를 하게 되었나요?",
          writer: "관리자",
          date: "2024 - 03 - 07",
        },
      ],
    };
  }
}
