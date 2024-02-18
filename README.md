# vue-storybook

## StoryBook setting

```bash
vue add storybook@next
```

## StoryBook 실행

```bash
npm run storybook:serve
```

## args

```
컴퍼넌트의 속성을 변경하기 위해 사용
```

```javascript
import '@/assets/styles/reset.css'
import '@/assets/styles/_variables.css'
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  title: 'ButtonGroup',
  tags: ['autodocs'],
  component: ButtonComp,
  argTypes: {
    onPinTask: () => {},
    onArchiveTask: () => {}
  }
}

export const Default = {
  args: {
    btnname: 'Default'
  }
}

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
```

## argTypes

```
args에서 인수의 유형 , 정보설명을 하기 위해 사용
```
