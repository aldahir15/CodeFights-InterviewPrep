function hasPathWithGivenSum(t, s, head = t) {
  if (t === null && s === 0) return true;
  if (t === null) return false;
  if (t.left === null && t.right === null && t !== head) {
    if (s - t.value === 0) {
      return true;
    }
  }

  return hasPathWithGivenSum(t.left, s - t.value, head) || hasPathWithGivenSum(t.right, s - t.value, head);
}
