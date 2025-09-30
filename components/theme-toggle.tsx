"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
        <Button variant="ghost" size="icon" className="h-9 w-9">
            <Sun className="h-4 w-4" />
        </Button>
        )
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" title="Cambiar tema">
        {theme === "dark" ? <Sun className="h-4 w-4 transition-all" /> : <Moon className="h-4 w-4 transition-all" />}
        <span className="sr-only">Cambiar tema</span>
        </Button>
    )
}
