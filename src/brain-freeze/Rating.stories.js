import {defineComponent, ref} from 'vue'
import Rating from "./Rating.vue";
import { userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'Rating',
  component: Rating,
}

export const Default = () => defineComponent({
  components: { Rating },
  setup () {
    return {
      value: ref(2)
    }
  },
  template: `
    <Rating v-model="value"/>
    <p>Current value: <span data-testid="current-value">{{ value }}</span></p>
  `,
})
Default.play = async ({ canvasElement }) => {
    // Use the aria-label for selecting the third rating item
  const ratingItem3 = canvasElement.querySelector('[role="radio"][aria-label="Rating 3"]');
  const currentValueDisplay = canvasElement.querySelector('[data-testid="current-value"]');

  // Simulate clicking the third rating item
  await userEvent.click(ratingItem3);

  // Verify 3rd rating item is being selected
  expect(currentValueDisplay.textContent).toContain('3');

  // We don't need to check visuals!
}
