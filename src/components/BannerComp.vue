<template>
  <div class="banner_container" :class="color">{{ bannerlabel }}</div>
</template>
<script>
export default {
  props: {
    bannerlabel: {
      type: String,
      default: '구독일이 얼마 안남았습니다.',
      required: false
    },
    color: {
      type: String,
      default: 'primary',
      required: false
    }
  },
  name: 'BannerComp',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
<style scoped src="@/assets/styles/banner.css"></style>
