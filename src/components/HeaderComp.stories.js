import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import '@/assets/styles/common.css'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  title: '헤더',
  component: HeaderComp,

  argTypes: {
    logisStatus: false
  }
}

export const Default = (_, { argTypes }) => ({
  components: { HeaderComp },
  props: Object.keys(argTypes),
  template: `
    <header-comp/>
  `
})
