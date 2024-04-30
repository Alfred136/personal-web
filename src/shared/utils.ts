const isUndefined = (value: any): value is undefined => typeof value === 'undefined';

/**
 * * This function assigns a default value to a value if it is undefined.
 * * Useful for assigning default values in object destructuring (type-safe, avoid union type).
 * -------------------------------------------------------------------------
 * @example
 *  const props: { value?: string } = {}
 *
 *  const { value = assignDefault(props.value, 'default value') } = props;
 *  // typeof value: string
 *
 *  const { value = assignDefault(props.value, 123) } = props;
 *  // typing error
 */
const assignDefault = <T>(value: T, defaultValue: NonNullable<T>) =>
  isUndefined(value) ? defaultValue : (value as NonNullable<T>);

export { isUndefined, assignDefault };
