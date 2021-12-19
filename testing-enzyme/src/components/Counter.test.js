/* eslint-disable jest/valid-expect */
import renderer from 'react-test-renderer';

import { shallow, mount } from 'enzyme';

import Counter from "./Counter";
import Button from "./Button";


describe("Counter component", () => {

    it("shall component render correctly", () => {
        const CounterComponent = renderer.create(<Counter />).toJSON();
        expect(CounterComponent).toMatchSnapshot();
    });

    it("should the initial state of the Counter be 0 if start is not defined", () => {
        const wrapper = shallow(<Counter />);
        const counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("0");
    });

    it("should the initial state of the Counter be 10 if start = 10", () => {
        const wrapper = mount(<Counter start="10" />);
        expect(wrapper.prop('start')).toBe("10");
        const counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("10");
    });

    it("should the component have buttons to increment and decrement the counter", () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.containsAllMatchingElements([
            <Button label="+" />,
            <Button label="-" />,
        ])).toEqual(true);
    });

    it("should the counter value decrement when the decrement button is clicked", () => {
        const wrapper = mount(<Counter />);
        const decrementButton = wrapper.find(".decrement-btn");
        let counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("0");
        decrementButton.simulate("click");
        counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("-1");
    });

    it("should the counter value increment when the increment button is clicked", () => {
        const wrapper = mount(<Counter />);
        const incrementButton = wrapper.find(".increment-btn");
        let counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("0");
        incrementButton.simulate("click");
        counterValue = wrapper.find(".counter-value");
        expect(counterValue.text()).toBe("1");
    });

    it("should the counter state change when the change button is clicked", () => {
        // value of the input field is not the value of the counter
        // the button is clicked
        // value of the input field is the value of the counter
    });

    it("should the counter value = start after reset button is clicked", () => {

    });
})