//NOTE: Simple sample of observables

let { fromEvent } = Rx;
let { map, pluck } = RxOperators;

let input = document.createElement('input');
let container = document.querySelector('.container');
container.appendChild(input);

let observable = fromEvent(input, 'input').pipe(
  //value (event in our case) - is an event object, that is coming from our observable
  //map(event => event.target.value),
  pluck('target', 'value'),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error('Enter a number!');
    }
    return value;
  })
);

//observer - is an object (or function), which is passed into
//subscribe() method

observable.subscribe({
  next(value) {
    console.log(`Your value is : ${value}`);
  },
  error(err) {
    console.error(`Error! ${err.message}`);
  },
});

//NOTE: Creating a raw observables

//TODO: Unicast Observable

const { Observable } = Rx;
const { tap } = RxOperators; //for adding console.logs

// we will call an object inside new Observable() observer or subscriber
let observable = new Observable((subscriber) => {
  // Throw the value 1 into our pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  // Stop emitting any new events. No more new values are going to come with this observable.
  subscriber.complete();

  // Emit an error, no more values will come out
  subscriber.error(new Error('Some error! lmao'));
}).pipe(tap((value) => console.log(`From tap: ${value}`)));
//If we don't want to add a pipe() method after our observable, it means, that
//any value emitted from our pipe-method won't flow directly into our observer below
//(inside subscribe method() for instance)

observable.subscribe({
  //the value inside next() method will be any balue that came from our observable
  //after going into processing pipeline (if it exists).

  next(value) {
    console.log(`Next value: ${value}`);
  },
  complete() {
    console.log(`Observable is complete. Don't Expect any more values`);
  },
  error(err) {
    console.error(`Error occured! ${err.message}`);
  },
});

//We can do the same by typing less code:
// observable.subscribe(
// (value) => console.log(`Our value: ${value}`),
// (err) => console.log(`Error occured! ${err.message}`),
// () => console.log(`Observable is complete. Don't Expect any more values`);
//);

observable.subscribe((value) => {
  console.log(`From second subscribe: ${value}`);
});

//TODO: The same logic, using Multicast observable

const { Observable } = Rx;
const { tap, share } = RxOperators;

let observable2 = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
}).pipe(
  tap((value) => console.log(`From tap: ${value}`)),
  share()
);

observable2.subscribe(
  (value) => console.log(`Next value: ${value}`),
  (err) => console.log(`Error occured! ${err.message}`),
  () => console.log(`Observable is complete. Don't Expect any more values`)
);

observable2.subscribe((value) => {
  console.log(`From second subscribe: ${value}`);
});
