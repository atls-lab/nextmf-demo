import { HTMLAttributes }  from 'react'

import { LayoutSprinkles } from './layout.css'

export interface LayoutProps extends HTMLAttributes<HTMLDivElement>, LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
