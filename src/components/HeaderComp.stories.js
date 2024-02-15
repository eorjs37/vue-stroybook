import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import '@/assets/styles/common.css'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  title: '헤더'
}

export const Default = () => ({
  components: { HeaderComp },
  template: `
    <header-comp/>
  `
})
