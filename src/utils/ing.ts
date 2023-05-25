export const ingCheck = (ingRef: Ref<boolean>) => (ingRef.value ? Promise.reject('ing') : Promise.resolve())

export const wrapPromise = <T>(p: () => Promise<T>, ingRef: Ref<boolean>) =>
  ingCheck(ingRef)
    .then(() => (ingRef.value = true))
    .then(p)
    .finally(() => (ingRef.value = false))
