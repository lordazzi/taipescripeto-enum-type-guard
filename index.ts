/**
 * Enum Type Guard
 */
export function enumTypeGuard<EnumAttribute extends string, EnumValue extends string | number>(
  value: unknown, enumeration: { [prop in EnumAttribute]: EnumValue }
): value is EnumValue {
  const enumAsObject: { [prop: string]: string | number } = Object(enumeration);
  //  includes is not compatible with some browsers
  const indexNotFound = -1;

  return Object
    .keys(enumeration)
    .map(key => enumAsObject[key])
    .indexOf(<any>value) !== indexNotFound;
}
