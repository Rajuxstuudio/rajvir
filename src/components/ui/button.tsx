import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // 3D Spline-style buttons
        hero: `relative bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 text-white font-bold 
               shadow-[0_6px_0_0_rgba(109,40,217,0.8),0_10px_20px_rgba(139,92,246,0.4)] 
               hover:shadow-[0_4px_0_0_rgba(109,40,217,0.8),0_8px_15px_rgba(139,92,246,0.5)] 
               hover:translate-y-[2px] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgba(109,40,217,0.8)]
               before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-transparent before:to-white/20`,
        glass: `relative backdrop-blur-xl bg-card/30 border-2 border-primary/30 text-foreground font-semibold
                shadow-[0_4px_0_0_hsl(var(--primary)/0.3),0_8px_20px_hsl(var(--primary)/0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
                hover:shadow-[0_2px_0_0_hsl(var(--primary)/0.3),0_6px_15px_hsl(var(--primary)/0.3)]
                hover:translate-y-[2px] hover:border-primary/50 active:translate-y-[3px]
                before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-transparent before:to-white/5`,
        spline: `relative bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white font-bold
                 shadow-[0_6px_0_0_rgba(59,130,246,0.8),0_10px_25px_rgba(59,130,246,0.4)]
                 hover:shadow-[0_4px_0_0_rgba(59,130,246,0.8),0_8px_20px_rgba(59,130,246,0.5)]
                 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgba(59,130,246,0.8)]
                 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-transparent before:to-white/25`,
        accent: `relative bg-gradient-to-br from-rose-400 via-pink-500 to-violet-500 text-white font-bold
                 shadow-[0_6px_0_0_rgba(219,39,119,0.8),0_10px_25px_rgba(236,72,153,0.4)]
                 hover:shadow-[0_4px_0_0_rgba(219,39,119,0.8),0_8px_20px_rgba(236,72,153,0.5)]
                 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-[0_2px_0_0_rgba(219,39,119,0.8)]
                 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-transparent before:to-white/20`,
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8",
        xl: "h-14 rounded-2xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
