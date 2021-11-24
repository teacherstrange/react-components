import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { createTheme, TableStyles } from 'react-data-table-component'

createTheme('default', {
  text: {
    primary: 'var(--foreground-color)',
    secondary: 'var(--dimmed-6)',
    disabled: 'var(--global-disabled-foreground)'
  },
  background: {
    default: '#transparent'
  },
  context: {
    background: 'transparent',
    text: 'var(--foreground-color)'
  },
  divider: {
    default: 'transparent'
  },
  button: {
    default: 'transparent',
    focus: 'var(--dimmed-1)',
    hover: 'transparent',
    disabled: 'var(--global-disabled-foreground)'
  },
  selected: {
    default: 'var(--highlight-blue-background)',
    text: 'var(--highlight-blue-foreground)'
  },
  highlightOnHover: {
    default: 'var(--dimmed-1)',
    text: 'var(--global-foreground)'
  },
  striped: {
    default: 'var(--dimmed-0)',
    text: 'var(--global-foreground)'
  }
})
export const customStyle = (rowHeight: string) => ({
  subHeader: {
    style: {
      padding: 0,
      marginBottom: tkns.space[24]
    }
  },
  rows: {
    style: {
      minHeight: rowHeight
    },
    highlightOnHoverStyle: {
      outline: 'none'
    }
  },
  headRow: {
    style: {
      borderBottom: '3px solid var(--dimmed-2)'
    }
  },
  headCells: {
    style: {
      fontWeight: 800,
      fontSize: tkns.font.size[16]
    }
  },
  cells: {
    style: {
      fontSize: tkns.font.size[16]
    }
  },
  pagination: {
    style: {
      fontSize: tkns.font.size[16]
    }
  }
} as TableStyles)
