import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import withInfo from 'storybook-addon-vue-info'

import Logo from './Logo'

storiesOf('Logo', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)

  .add('to Storybook', () => ({
    components: {
      Logo
    },
    template: '<Logo :showApp="action" />',
    methods: {
      action: linkTo('Button')
    }
  }))
