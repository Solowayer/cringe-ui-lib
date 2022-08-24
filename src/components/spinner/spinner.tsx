import { SIZE } from './constants'
import { StyledSpinner } from './styled'

type SpinnerType = ''

export type SpinnerProps = {
  type?: SpinnerType
  size?: keyof typeof SIZE
}

export const Spinner = (props: SpinnerProps) => {
  const { type, size } = props
  return <StyledSpinner type={type} size={size} />
}
