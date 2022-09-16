import { ReactElement, ReactNode } from 'react'
import { StyledItem, StyledIcon, StyledDivider } from './styled'

export type ItemProps = {
  icon?: ReactElement
  label?: string
  divider?: boolean
}

export const Item = (props: ItemProps) => {
  const { icon, label, divider } = props

  return (
    <>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledItem>
          <StyledIcon>{icon}</StyledIcon>
          {label}
        </StyledItem>
      )}
    </>
  )
}
