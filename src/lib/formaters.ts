/**
 * @file Formaters
 * @description This file contains a function that formats a number to a string.
 */

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("id-ID").format(value);
};
