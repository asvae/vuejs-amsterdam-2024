import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Rating from './Rating.vue';

describe("Rating", () => {
  it("updates modelValue when a rating item is clicked", async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 2,
      },
      attrs: {
        "onUpdate:modelValue": (newValue) => wrapper.setProps({ modelValue: newValue }),
      },
    });

    const newRating = 3; // The new rating to be selected
    await wrapper.findAll('[role="radio"]')[newRating - 1].trigger('click');
    expect(wrapper.props("modelValue")).toBe(newRating);
  });

  it("matches the snapshot", () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 3,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
