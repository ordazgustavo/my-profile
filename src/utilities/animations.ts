export function fluidHeight(node: HTMLElement, prevHeight: string, targetHeight: string) {
  return node.animate(
    [
      { height: `${parseInt(prevHeight, 10) + 100}px` },
      { height: `${parseInt(targetHeight, 10) + 100}px` },
    ],
    {
      duration: 300,
      fill: 'forwards',
      easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
      iterations: 1,
    },
  )
}
