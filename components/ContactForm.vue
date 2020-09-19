<template>
  <div>
    <div class="contactfrm">
      <svg
        @click="emitClose"
        class="close-btn"
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 102 102"
      >
        <g id="Group_4" data-name="Group 4" transform="translate(-1484 -58)">
          <circle
            id="Ellipse_7"
            data-name="Ellipse 7"
            cx="51"
            cy="51"
            r="51"
            transform="translate(1484 58)"
            fill="#ec9d26"
          />
          <line
            id="Line_5"
            data-name="Line 5"
            x2="39.5"
            y2="39.5"
            transform="translate(1515 89)"
            fill="none"
            stroke="#fff"
            stroke-width="5"
          />
          <line
            id="Line_6"
            data-name="Line 6"
            x1="39.5"
            y2="39.5"
            transform="translate(1515 89)"
            fill="none"
            stroke="#fff"
            stroke-width="5"
          />
        </g>
      </svg>

      <form @submit.prevent="sendMail" class="contact-form" method="POST" action="send">
        <div class="top">
          <div>
            <label for="name">Name</label>
            <br />
            <input
              id="Name"
              v-model="maildata.from_name"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label for="email">E-mail</label>
            <br />
            <input
              v-model="maildata.reply_to"
              id="Email"
              type="email"
              name="email"
              placeholder="johndoe10@gmail.com"
            />
          </div>
        </div>
        <div class="top">
          <div>
            <label for="phone">Phone</label>
            <br />
            <input v-model="phone" id="Phone" type="text" name="phone" placeholder="+91-9780435741" />
          </div>
          <div>
            <label for="subject">Subject</label>
            <br />
            <input v-model="maildata.to_name" id="subject" type="text" name="subject" placeholder />
          </div>
        </div>
        <div>
          <label for="message">Message</label>
          <br />
          <textarea
            v-model="maildata.message"
            name="message"
            id="Message"
            cols="30"
            rows="10"
            placeholder
          ></textarea>
        </div>
        <input type="submit" name class="contact-btn" id="submit-btn" :value="msgVal" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      phone: "",
      msgVal: "Send message",
      maildata: {
        to_name: "",
        reply_to: "",
        from_name: "",
        message: "",
      },
    };
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    sendMail() {
      this.msgVal = "Sending Message ...";
      const maildata = this.maildata;
      this.maildata = {
        to_name: "",
        reply_to: "",
        from_name: "",
        message: "",
      };
      maildata.reply_to += " Phn: " + this.phone;
      emailjs
        .send(
          "service_yhytumi",
          "template_ijb556i",
          maildata,
          "user_V8QxHuMS0boIwhzwBAQh9"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            this.emitClose();
            console.log(maildata);
            this.msgVal = "Send message";
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
