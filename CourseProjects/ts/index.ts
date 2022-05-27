import { Person } from './Person';

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

let post: Post = { title: 'Title 1', daysOld: 25, published: true };

let post1 = { title: 'Title 1', daysOld: 25, published: true, lmao: 233 };

const printPost = (post: Post): string => {
  return `${post.title}, ${post.daysOld}, ${post.published}`;
};

//console.log(printPost(post1));

//NOTE: decorators

const Component = (target: any) => {
  console.log(target);
};

@Component
class Car {}

let person = new Person();
console.log(person.name);

//NOTE: Generics
const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

let newValue = valueWrapper<number>(5);
console.log(newValue);

console.log(valueWrapper<string>('Hey'));

//NOTE: RxJs
