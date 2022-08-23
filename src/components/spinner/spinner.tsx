import { SIZE } from './constants'
import { StyledSpinner } from './styled'

export type SpinnerProps = {
  type?: 'green' | 'white'
  size?: keyof typeof SIZE
}

export const Spinner = (props: SpinnerProps) => {
  const { size, type } = props
  return <StyledSpinner type={type} size={size} />
}
