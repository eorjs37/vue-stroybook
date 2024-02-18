import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  title: 'ButtonGroup',
  tags: ['autodocs'],
  component: ButtonComp,
  argTypes: {
    onPinTask: () => {
    },
    onArchiveTask: () => { },
  },

}

export const Default = {
  argTypes: {
    btnname: 'DD'
  }
}

// export const Default = () => ({
//   components: { ButtonComp },
//   template: `
//     <button-comp btnname="Default"/>
//   `,


// })

// export const Warning = () => ({
//   components: { ButtonComp },
//   template: `
//     <button-comp color="warning" btnname="경고"/>
//   `
// })

// export const Danger = () => ({
//   components: { ButtonComp },
//   template: `
//     <button-comp color="danger" btnname="경고"/>
//   `
// })
