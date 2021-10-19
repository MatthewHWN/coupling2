# Coupling 2

> a loosely coupled system is one in which each of its components has, or makes use of, little or no knowledge of the definitions of other separate components.


### Learning Objectives
- Refactor code to go from tight coupling to loose coupling.

### To run tests

```sh
$ npx jasmine
# or
$ npm test
```

### To lint code

```sh
# eg: linting src code
$ npx eslint src --fix
```

## Instructions

- [ ] `npm install` the dependencies for this project
- [ ] Isolate the subject under test in `checkout.spec.js` by replacing `Item` with test doubles. You'll know you're done when you can remove the `require()` statement for `Item` at the top of the spec;
- [ ] Further de-couple `Checkout` and `Receipt` by moving the pointer to the dependency from the function body to outside the class or as a default method argument. Then, update your `checkout.spec.js` accordingly.
- [ ] Make sure your tests are still passing.

## Further work

- [ ] Isolate the subject under test in `truth-teller.spec.js` - find the dependency and then decouple it from the subject. Your pending tests should then pass (once you remove the `x` from before the `describe`)
- [ ] Use [jasmine](https://jasmine.github.io/tutorials/your_first_suite) spies to get more control over your test doubles. Replace the Receipt test double with a jasmine spy and assert that its `print()` method was called.
