import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  title: 'ButtonGroup',
  tags: ['autodocs'],
  component: ButtonComp,
  argTypes: {
    btnname: {
      control: 'text',
      description: 'Overwritten description'
    }
  }
}

export const Default = {}

export const Danger = {
  args: {
    btnname: '위험',
    color: 'danger'
  }
}

export const Warning = {
  args: {
    btnname: '경고',
    color: 'warning'
  }
}
