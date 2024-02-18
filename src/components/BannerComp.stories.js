import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import BannerComp from '@/components/BannerComp.vue'

export default {
  title: 'BannerComp',
  tags: ['autodocs'],
  component: BannerComp,
  argTypes: {
    bannerlabel: {
      control: 'text',
      description: 'Overwritten description'
    },
    color: {
      control: 'radio',
      options: ['primary', 'warning', 'danger']
    }
  }
}

export const Default = {}
