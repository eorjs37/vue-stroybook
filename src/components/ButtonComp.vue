<template>
  <button class="common_btn" :class="color">{{ btnname }}</button>
</template>
<script>
export default {
  emits: ['onbtn-click'],
  props: {
    btnname: {
      type: String,
      required: false,
      default: '버튼'
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  name: 'BookButtonComp',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    click() {
      this.$emit('onbtn-click')
    }
  }
}
</script>
<style scoped src="@/assets/styles/button.css"></style>
