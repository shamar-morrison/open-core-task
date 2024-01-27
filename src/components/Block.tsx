import { cn } from '@/lib/utils'
import React from 'react'

const Block = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    className={cn('flex gap-3 flex-col justify-center', className)}
    ref={ref}
    {...props}
  />
))
Block.displayName = 'Block'

const BlockTitle = React.forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-primary-500 text-sm', className)}
      {...props}
    />
  )
})
BlockTitle.displayName = 'BlockTitle'

const BlockContent = React.forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn('text-[30px]', className)} {...props} />
})
BlockContent.displayName = 'BlockContent'

const BlockFooter = React.forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('mt-14 text-primary-500 text-sm', className)}
      {...props}
    />
  )
})
BlockFooter.displayName = 'BlockFooter'

export { BlockTitle, BlockContent, BlockFooter, Block }
