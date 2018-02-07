import { helper } from '@ember/component/helper';

export function isCompleted(params) {
  const [completedArray, todo] = params;
  return completedArray.includes(todo);
}

export default helper(isCompleted);
