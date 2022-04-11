import { BreakpointsOptions, PaletteOptions, Direction, Transitions } from "@mui/material"
import { ShapeOptions, Spacing } from "@mui/system"
import { TypographyOptions } from "@mui/material/styles/createTypography"
import { Mixins } from "@mui/material/styles/createMixins"
import { Components } from "@mui/material/styles/components"
import { ZIndex } from "@mui/material/styles/zIndex"

export interface Theme {
  shape: ShapeOptions
  breakpoints: BreakpointsOptions
  palette: PaletteOptions
  typography: TypographyOptions
  direction: Direction
  mixins: Mixins
  components?: Components
  spacing: Spacing
  transitions: Transitions
  zIndex: ZIndex
  unstable_strictMode?: boolean
}