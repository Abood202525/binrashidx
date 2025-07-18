import { Card } from "@/components/ui/card"

interface ProfileCardProps {
  name: string
  title: string
  imageUrl: string
}

export function ProfileCard({ name, title, imageUrl }: ProfileCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-card shadow-strong hover:shadow-medium transition-all duration-500 animate-scale-in">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative p-8 text-center">
        {/* Profile image with floating animation */}
        <div className="relative mb-6 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-strong ring-4 ring-primary/20">
            <img 
              src={imageUrl} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          
          {/* Animated glow ring */}
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full ring-2 ring-primary/30 animate-glow" />
        </div>
        
        {/* Name and title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-muted-foreground text-lg">
            {title}
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
        <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </Card>
  )
}