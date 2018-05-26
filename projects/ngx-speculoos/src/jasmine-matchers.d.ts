declare namespace jasmine {
  interface Matchers<T> {

    /**
     * Checks that the receiver is a TestElement wrapping a DOM element and has the given CSS class
     */
    toHaveClass(className: string): boolean;

    /**
     * Checks that the receiver is a TestInput or a TestTextArea and has the given value
     */
    toHaveValue(value: string): boolean;
  }
}