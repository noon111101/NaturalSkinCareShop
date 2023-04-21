<template>
  <div class="question">
    <div class="ques">
      <div class="info row">
        <div class="col-1"><span class="avatar"></span></div>
        <div class="name col-11">
        <span>Virginia K.</span>
        <span>Verified Buyer</span>
        <span class="date">02/09/23</span>
        </div>
      </div>

      <div class="content">
        Q: Is the packaging plastic? And if so what type?
      </div>
      <div class="icons">
        <font-awesome-icon icon="fa-solid fa-message" /> Anwsers(1)
      </div>
    </div>
    <div class="ans">
      <div class="content-title row">
        <div class="col-1"><span class="avatar"></span></div>
        <span style="font-weight: 600">Store Owner</span>
      </div>
      <div class="content-question mt-1">
        A: Hi Mel, <br />
        <br />thank you for your question and apologies for the delay. We
        wouldn't recommend that you use our Foaming Facial Cleanser Pump
        directly on your eyes and to remove makeup. <br />
        <br />Should you require any more information please reach out to our
        consumer care service at
        <a
          href="mailto:info@sukinnaturals.com"
          target="_blank"
          rel="noopener noreferrer"
          >info@sukinnaturals.com</a
        >
      </div>

      <div class="help mt-1 d-flex justify-content-end">
        <span
          style="padding-right: 8px; height: 1rem; text-transform: capitalize"
          >was this helpful?</span
        >
        <span style="padding-right: 4px"
          ><font-awesome-icon
            icon="fa-solid fa-thumbs-up "
            style="padding-right: 2px"
          />
          0</span
        >
        <span
          ><font-awesome-icon
            icon="fa-solid fa-thumbs-up"
            flip="vertical"
            style="padding-right: 2px"
          />
          0</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuesBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.question {
    margin-top: 20px;
  width: 100%;
  height: 10rem;
}
.question .ques {
  width: 100%;
}
.ques .info{
    height: 10%;
  
}
.ques .info .col-1{
  position: relative;
}
.info .col-1 .avatar {
  position: absolute;
  background-color: aqua;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 900;
  font-size: large;
  right: 5px;
}
.ques .info span:first-child{
    margin-right: 8px;
    font-weight: 700;
}
.ques .info span:last-child{
    float: right;
}
.ques .content{
    margin-top: 10px;
    margin-left: 8.5%;
    font-size: large;
    font-weight: 600;
    color: silver;
}
.ques .icons{
    margin-top: 27px;
    margin-left: 8.5%;
}
.ans{
    margin-left: 3%;
    margin-top: 15px;
    border-left: 5px solid blue;
}
.ans .content-question{
    margin-left: 7%;
    padding: 20px;
    width: 75%;
}
.ans .content-title{
    padding-top: 40px;
}
.content-title .col-1{
    position: relative;
}
.content-title span{
    margin-left: 8%;
}
.content-title .col-1 .avatar{
    position: absolute;
  background-color: aqua;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 900;
  font-size: large;
  right: 5px;
}

</style>
