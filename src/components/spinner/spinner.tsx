import { SIZE } from './constants'
import { StyledSpinner } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'

export type SpinnerProps = {
  size?: keyof typeof SIZE
  className?: string
  disabled?: boolean
}

export const Spinner = (props: SpinnerProps) => {
  const { size = 'medium' } = props
  return (
    <LibraryThemeProvider>
      <StyledSpinner size={size} />
    </LibraryThemeProvider>
  )
}
