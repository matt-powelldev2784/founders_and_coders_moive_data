export const toggleNode = (nodeProps, displayState) => {
  nodeProps.forEach((nodeProps) => {
    const { element, cssKey, displayStyle, hideStyle } = nodeProps

    if (displayState) {
      element.style[cssKey] = displayStyle
    }

    if (!displayState) {
      element.style[cssKey] = hideStyle
    }
  })
}
