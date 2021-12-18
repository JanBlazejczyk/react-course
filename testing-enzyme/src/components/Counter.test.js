import { shallow } from 'enzyme';

describe("Counter component", () => {
    // czy stan początkowy komponentu wynosi 0 jeśli nie przekażemy propsa start
    it("shall the initial state of the Counter be 0 if start is not defined")
    // czy stan początkowy komponentu wynosi 10 jeśli przekażemy propsa start równy 10
    it("shall the initial state of the Counter be 10 if start = 10")
    // czy komponent posiada przyciski do dodawania oraz odejmowania
    it("shall the component has buttons to increment and decrement the counter")
    // czy po kliknięciu w przyciski stan odpowiednio się modyfikuje
    it("shall the counter value decrement when the decrement button is clicked")
    it("shall the counter value increment when the increment button is clicked")
    // czy po wpisaniu liczby w pole tekstowe oraz naciśnięcię przycisku Zmień zmienia się stan przycisku
    it("shall the counter state change when the change button is clicked")
    // po naciśnięciu przycisku Reset stan licznika zmieni się na początkowy
    it("shall the counter value = start after reset button is clicked")
})