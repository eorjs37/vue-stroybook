import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import '@/assets/styles/common.css'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  title: '헤더',
  component: HeaderComp
}


export const Default = () => ({
  components: { HeaderComp },
  template: `
    <header-comp/>
  `,
  methods: {
    customMethod() {
      console.log('Custom method called from Storybook');
    }
  },
  mounted() {
    console.log("!");
  }

})
