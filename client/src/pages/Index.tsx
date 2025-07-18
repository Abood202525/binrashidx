import { Instagram, Youtube, Music, Gamepad2, Camera, Palette, DollarSign, MessageCircle, Zap, User, Eye, Lightbulb, Heart, Tv, CreditCard, ChevronDown } from "lucide-react"
import { SocialLink } from "@/components/SocialLink"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram",
    username: "@binrashidx",
    href: "https://www.instagram.com/binrashidX",
    color: "#E4405F"
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "YouTube",
    username: "Bin Rashid Channel",
    href: "https://www.youtube.com/channel/UCkKgO9aRwB7lHRKZbhPm3eg",
    color: "#FF0000"
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "TikTok",
    username: "@binrashidx",
    href: "https://tiktok.com/@binrashidx",
    color: "#000000"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Snapchat",
    username: "binrashidx",
    href: "https://snapchat.com/t/qRLGWtF",
    color: "#FFFC00"
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Twitch",
    username: "binrashidx",
    href: "https://twitch.tv/binrashidx",
    color: "#9146FF"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Behance",
    username: "حمد مخا",
    href: "https://behance.net/kingjt1",
    color: "#1769FF"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Discord",
    username: "4TFfhSc",
    href: "https://discord.gg/4TFfhSc",
    color: "#5865F2"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "PayPal",
    username: "hameedRN7",
    href: "https://paypal.com/paypalme/hameedRN7",
    color: "#0070BA"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Kick",
    username: "binrashidx",
    href: "https://kick.com/binrashidx",
    color: "#53FC18"
  }
]

const serviceCards = [
  {
    icon: <Youtube className="w-12 h-12 text-primary" />,
    title: "محتوى يوتيوب",
    description: "محتوى إبداعي ومميز يناسب جميع الأعمار ويقدم قيمة حقيقية للمشاهدين",
    link: "https://www.youtube.com/channel/UCkKgO9aRwB7lHRKZbhPm3eg"
  },
  {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: "تصميم جرافيك",
    description: "تصاميم احترافية ومبدعة تلبي احتياجاتك وتعكس هويتك البصرية بشكل مميز",
    link: "https://behance.net/kingjt1"
  },
  {
    icon: <Eye className="w-12 h-12 text-primary" />,
    title: "إنتاج المحتوى",
    description: "خبرة في إنتاج محتوى متنوع عبر منصات التواصل الاجتماعي المختلفة",
    link: "#"
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    title: "الأفكار الإبداعية",
    description: "أفكار مبتكرة ومشاريع إبداعية تساعد في تطوير المحتوى والوصول للجمهور",
    link: "#"
  }
]

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="bg-muted/50 border-border">
      <CardContent className="p-0">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 text-right hover:bg-muted/30 transition-colors duration-200 flex items-center justify-between"
        >
          <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          <span className="text-sm font-medium text-card-foreground">{question}</span>
        </button>
        {isOpen && (
          <div className="px-4 pb-4 text-right">
            <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-card">
          {/* Stars pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, hsl(var(--foreground) / 0.8), transparent),
                             radial-gradient(2px 2px at 40px 70px, hsl(var(--foreground) / 0.6), transparent),
                             radial-gradient(1px 1px at 90px 40px, hsl(var(--foreground) / 0.9), transparent),
                             radial-gradient(1px 1px at 130px 80px, hsl(var(--foreground) / 0.4), transparent),
                             radial-gradient(2px 2px at 160px 30px, hsl(var(--foreground) / 0.7), transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }} />
        </div>
      </div>
      
      {/* Theme Toggle */}
      <div className="absolute top-6 left-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-right space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
                  حمد الذهلي
                </h1>
                <p className="text-xl leading-relaxed max-w-lg text-foreground">
                  أنا حمد بن راشد الذهلي، صانع محتوى على منصات التواصل الاجتماعي، ابلغ من العمر 19 عامًا أشارك محتوى متنوعًا يهدف إلى الإلهام والسلبية، وأسعى دائمًا لتقديم أفكار جديدة
                </p>
                 <div className="flex gap-4 justify-end">
                   <Button 
                     className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg"
                     onClick={() => window.open('https://solo.to/binrashidx', '_blank')}
                   >
                     تعرف أكثر عني
                   </Button>
                 </div>
                
                {/* Social Icons */}
                 <div className="flex gap-4 justify-end pt-4">
                  <a href="https://www.instagram.com/binrashidX" className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                    <Instagram className="w-5 h-5 text-muted-foreground" />
                  </a>
                   <a href="https://www.youtube.com/channel/UCkKgO9aRwB7lHRKZbhPm3eg" className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                     <Youtube className="w-5 h-5 text-muted-foreground" />
                   </a>
                 </div>
                
              </div>
              
              {/* Right Image */}
              <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                    <img
                      src="/lovable-uploads/0d45b6b8-606e-4644-8029-fd8021884ab4.png"
                      alt="حمد ابن راشد"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Sections */}
        <div className="bg-card/95 backdrop-blur-lg py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* About Me & Skills Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* About Me */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-amiri text-card-foreground">تعرف أكثر عني</h2>
                </div>
                <div className="space-y-4">
                  <FAQItem 
                    question="ما المهارة أو الهواية التي أمارسها خارج نطاق العمل؟"
                    answer="أمارس صناعة المحتوى على منصات التواصل الاجتماعي وأستخدم تصميم الجرافيك كمساحتي للتعبير والإبداع."
                  />
                  <FAQItem 
                    question="ما الشهادات اللي حصلت عليها؟"
                    answer="(ISC)² Certified in Cybersecurity (CC) • CompTIA Security+ • CompTIA CySA+ (Cybersecurity Analyst) • Certified Ethical Hacker (CEH) • CompTIA PenTest+ • Cisco Certified Support Technician (CCST) • كما شاركت بفعالية في عدد من تحديات CTF (Capture The Flag) التي عززت مهاراتي العملية في التحليل الأمني واختبار الاختراق"
                  />
                  <FAQItem 
                    question="ما أكثر شيء أستمتع به في وقت فراغي؟"
                    answer="أستمتع كثيرًا بقضاء وقتي في الألعاب"
                  />
                  <FAQItem 
                    question="قهوة ولا شاي؟"
                    answer="الشاي طبعًا!"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-amiri text-card-foreground">المهارات</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: 'Html', percentage: 90 },
                    { skill: 'Css', percentage: 85 },
                    { skill: 'Javascript', percentage: 80 },
                    { skill: 'React', percentage: 75 },
                    { skill: 'Angular', percentage: 60 }
                  ].map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-card-foreground font-tajawal">{item.skill}</span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Social Media */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Education */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">التعليم</h2>
                </div>
                <div className="space-y-4">
                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <h3 className="font-bold text-card-foreground">كلية الشرق الأوسط</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">بكالوريوس هندسة</p>
                      <p className="text-muted-foreground text-sm">الأمن السيبراني</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <h3 className="font-bold text-card-foreground">أكاديمية عين</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">تخصص تقنية المعلومات</p>
                      <p className="text-muted-foreground text-sm">(IT)</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">التواصل الاجتماعي</h2>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                   <a href="https://discord.gg/4TFfhSc" target="_blank" rel="noopener noreferrer">
                     <Card className="bg-muted/50 border-border hover:shadow-md transition-all hover:scale-105">
                       <CardContent className="p-4 text-center">
                         <div className="w-12 h-12 mx-auto mb-2 rounded-xl overflow-hidden">
                           <img 
                             src="/lovable-uploads/1f0a532a-d9e1-461a-96e0-ca807e318d11.png" 
                             alt="Discord" 
                             className="w-full h-full object-cover"
                           />
                         </div>
                          <h4 className="font-bold text-card-foreground text-sm">Discord</h4>
                       </CardContent>
                     </Card>
                   </a>
                   
                   <a href="https://snapchat.com/t/qRLGWtF" target="_blank" rel="noopener noreferrer">
                     <Card className="bg-muted/50 border-border hover:shadow-md transition-all hover:scale-105">
                       <CardContent className="p-4 text-center">
                         <div className="w-12 h-12 mx-auto mb-2 rounded-xl overflow-hidden">
                           <img 
                             src="/lovable-uploads/1a4aa7ba-dcf6-4877-92a0-9c740f187400.png" 
                             alt="Snapchat" 
                             className="w-full h-full object-cover"
                           />
                         </div>
                          <h4 className="font-bold text-card-foreground text-sm">Snapchat</h4>
                       </CardContent>
                     </Card>
                   </a>
                   
                   <a href="https://www.instagram.com/binrashidX" target="_blank" rel="noopener noreferrer">
                     <Card className="bg-muted/50 border-border hover:shadow-md transition-all hover:scale-105">
                       <CardContent className="p-4 text-center">
                         <div className="w-12 h-12 mx-auto mb-2 rounded-xl overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                           <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                             <div className="w-3 h-3 border border-white rounded-full flex items-center justify-center">
                               <div className="w-1 h-1 bg-white rounded-full"></div>
                             </div>
                           </div>
                         </div>
                         <h4 className="font-bold text-card-foreground text-sm">Instagram</h4>
                       </CardContent>
                     </Card>
                   </a>
                   
                   <a href="https://tiktok.com/@binrashidx" target="_blank" rel="noopener noreferrer">
                     <Card className="bg-muted/50 border-border hover:shadow-md transition-all hover:scale-105">
                       <CardContent className="p-4 text-center">
                         <div className="w-12 h-12 mx-auto mb-2 rounded-xl overflow-hidden">
                           <img 
                             src="/lovable-uploads/a87afc62-3f3e-477b-9200-14998c05dee5.png" 
                             alt="TikTok" 
                             className="w-full h-full object-cover"
                           />
                         </div>
                          <h4 className="font-bold text-card-foreground text-sm">TikTok</h4>
                       </CardContent>
                     </Card>
                   </a>
                 </div>
              </div>
            </div>

            {/* Services & Contact */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Services */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-amiri text-card-foreground">المهارات ذات الصلة</h2>
                </div>
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <Palette className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold font-tajawal text-card-foreground mb-4">تصميم جرافيك</h3>
                    <p className="text-muted-foreground font-tajawal text-sm mb-6 leading-relaxed">
                      أقدم تصاميم إبداعية واحترافية تناسب جميع منصات التواصل الاجتماعي، وتلبي احتياجاتك بدقة، 
                      وتعكس هويتك البصرية بأسلوب فريد ومميز.
                    </p>
                     <Button 
                       className="bg-primary hover:bg-primary-glow text-primary-foreground px-8"
                       onClick={() => window.open('https://www.behance.net/ringl1', '_blank')}
                     >
                       صمم معنا
                     </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-amiri text-card-foreground">تواصل معنا</h2>
                </div>
                <Card className="bg-muted/50 border-border">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground font-tajawal text-sm mb-4">امسح رمز الـ QR للوصول إلى الانستقرام</p>
                    <div className="w-32 h-32 mx-auto bg-background border-2 border-border rounded-lg flex items-center justify-center mb-4">
                      <div className="text-muted-foreground text-xs font-mono">QR CODE</div>
                    </div>
                    <p className="text-xs text-muted-foreground font-tajawal">CONTACT US</p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-card backdrop-blur-lg border-t border-border py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              © حمد ابن راشد • جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Index;