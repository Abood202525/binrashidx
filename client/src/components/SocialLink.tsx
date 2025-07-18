import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface SocialLinkProps {
  icon: React.ReactNode
  title: string
  username: string
  href: string
  color: string
}

export function SocialLink({ icon, title, username, href, color }: SocialLinkProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 text-decoration-none"
      >
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-soft"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground truncate">
            {username}
          </p>
        </div>
        
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-1" />
      </a>
    </Card>
  )
}