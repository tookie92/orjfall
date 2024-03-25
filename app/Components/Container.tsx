import { cn } from "@/lib/utils"


type Props = {
    children: React.ReactNode,
    className?: string
}

function Container({children, className}: Props ) {
  return (
    <div  className={cn('mx-auto max-w-[980px] px-6', className)}>{children}</div>
  )
}

export default Container