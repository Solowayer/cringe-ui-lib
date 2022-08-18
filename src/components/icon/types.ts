import { SVGAttributes } from 'react'

export type IconProps = SVGAttributes<SVGElement> & {
  name?: string
  size?: '12' | '16' | '24'
  color?: string | 'currentColor'
}
