import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  variants: {
    base: {
      border: '1px solid',
      background: 'light.primary.50',
      borderColor: 'light.border',
      _dark: {
        background: 'dark.primary.700',
      },
    },
    frame: {
      background: 'light.primary.100',
      boxShadow: 'light',

      _dark: {
        background: 'dark.primary.900',
        boxShadow: `dark`,
      },
    },
    accent: {
      color: 'white',
      background: 'light.accent.400',

      _dark: {
        background: 'dark.accent.400',
      },
      _disabled: {
        opacity: 0.7,
      },
    },
  },
  baseStyle: {
    fontWeight: 'regular',
    borderRadius: 'xl',
    _focus: {
      outlineColor: 'light.accent.400',
    },
    _dark: {
      borderColor: 'dark.border',
      _focus: {
        outlineColor: 'dark.accent.400',
      },
    },
    _active: {
      color: 'white',
      background: 'light.accent.400',
      _dark: {
        background: 'dark.accent.400',
      },
    },
    _hover: {
      background: 'light.accent.300',

      _dark: {
        background: 'dark.accent.300',
      },
    },
  },
  defaultProps: {
    variant: 'base',
    size: 'sm',
  },
})
