/* eslint-disable jest/valid-expect */
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Counter from "./Counter";
import Button from "./Button";


describe("Counter component", () => {
  it("should render correctly", () => {
    const CounterComponent = renderer.create(<Counter />).toJSON();
    expect(CounterComponent).toMatchSnapshot();
  });

  it("should have the initial state of Counter == 0 if start is not defined", () => {
    const wrapper = shallow(<Counter />);
    const counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("0");
  });

  it("should have the initial state of the Counter == 10 if start == 10", () => {
    const wrapper = mount(<Counter start="10" />);
    expect(wrapper.prop('start')).toEqual("10");
    const counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("10");
  });

  it("should have buttons to increment and decrement the counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.containsAllMatchingElements([
      <Button label="+" />,
      <Button label="-" />,
    ])).toEqual(true);
  });

  it("should decrement the counter value when the decrement button is clicked", () => {
    const wrapper = mount(<Counter />);
    const decrementButton = wrapper.find(".decrement-btn");
    let counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("0");
    decrementButton.simulate("click");
    counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("-1");
  });

  it("should increment the counter value when the increment button is clicked", () => {
    const wrapper = mount(<Counter />);
    const incrementButton = wrapper.find(".increment-btn");
    let counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("0");
    incrementButton.simulate("click");
    counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("1");
  });

  it("should change the counter state when the change button is clicked", () => {
    // value of the input field is not the value of the counter
    const wrapper = mount(<Counter />);

    // change the value in the input field to 20
    const input = wrapper.find(".counter-input");
    input.simulate('change', { target: { value: "20" } });

    // before the button is clicked the counter value is 0
    let counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("0");

    // the button is clicked
    const changeButton = wrapper.find(".change-btn");
    changeButton.simulate("click");

    // value of the input field is the value of the counter
    counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("20");
  });

  it("should have the counter value == start after reset button is clicked", () => {
    const wrapper = mount(<Counter start="10" />);
    let counterValue = wrapper.find(".counter-value").text();
    const resetButton = wrapper.find(".reset-btn");
    const incrementButton = wrapper.find(".increment-btn");

    // change the value of the counter to other than initial
    incrementButton.simulate("click");
    counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("11");

    // click the reset button and assume that it has the value of the start prop
    resetButton.simulate("click");
    counterValue = wrapper.find(".counter-value").text();
    expect(counterValue).toEqual("10");
  });
})