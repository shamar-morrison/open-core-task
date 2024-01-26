import { cn } from '@/lib/utils'
import React from 'react'

const Container = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div className={cn('p-8', className)} ref={ref} {...props} />
))
Container.displayName = 'Container'

export { Container }