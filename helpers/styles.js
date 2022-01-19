export const breakpoints = {
  sm: 640,
  md: 896,
  lg: 1092,
};

export const media = {
  /* small size and up */
  sm: `@media only screen and (min-width: ${breakpoints.xs}px)`,
  /* medium size and up */
  md: `@media only screen and (min-width: ${breakpoints.sm}px)`,
  /* large size and up */
  lg: `@media (min-width: ${breakpoints.md}px)`,
};
