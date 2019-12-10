export function classnames(...args) {
  if (!args) {
    return '';
  }

  return args.filter(Boolean).join(' ');
}