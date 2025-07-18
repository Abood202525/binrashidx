import { useState } from "react"
import { MessageCircle, Bot, User, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface QA {
  question: string
  answer: string
}

const qaData: QA[] = [
  {
    question: "ما أكثر تطبيق تستخدمه يوميًا؟",
    answer: "تيك توك ويوتيوب."
  },
  {
    question: "هل تفضل نظام أندرويد أم iOS؟",
    answer: "أندرويد."
  },
  {
    question: "هل تستخدم الذكاء الاصطناعي في حياتك اليومية؟",
    answer: "نعم، أستخدم ChatGPT أحيانًا."
  },
  {
    question: "هل لديك قناة على يوتيوب أو حساب شهير؟",
    answer: "نعم، عندي قناة نشطة ومتابعين على أكثر من منصة."
  },
  {
    question: "هل تفضل الألعاب أم البرمجة؟",
    answer: "أفضل الألعاب."
  },
  {
    question: "هل تفضل التصميم الجرافيكي أم كتابة المحتوى؟",
    answer: "التصميم الجرافيكي."
  },
  {
    question: "هل تستخدم أدوات تحرير مثل Canva أو Photoshop؟",
    answer: "أستخدم Canva وأحيانًا Photoshop."
  },
  {
    question: "هل فكرت في تصميم موقع شخصي؟",
    answer: "نعم، فكرت أني أعمل موقع بسيط فيه روابط حساباتي."
  },
  {
    question: "هل تستخدم مواقع مثل ChatGPT كثيرًا؟",
    answer: "أستخدمه وقت أحتاج أفكار أو أراجع المحتوى."
  },
  {
    question: "هل تتعامل مع NFTs أو العملات الرقمية؟",
    answer: "لا، لكن ممكن أتعلم عنها لاحقًا."
  },
  {
    question: "ما هو حلمك الكبير في الحياة؟",
    answer: "أكون صانع محتوى معروف وأبني ستوديو خاص فيني."
  },
  {
    question: "أين ترى نفسك بعد 5 سنوات؟",
    answer: "أشوف نفسي أشتغل على مشروعي وأتعاون مع ناس محترفين."
  },
  {
    question: "ما هو مشروعك الشخصي الذي تتمنى تحقيقه؟",
    answer: "أطلق منصة أو محتوى خاص يمثلني."
  },
  {
    question: "هل تطمح للعيش في بلد آخر؟",
    answer: "نعم، أفكر أعيش فترة خارج بلدي للتجربة والتطور."
  },
  {
    question: "هل تريد أن يكون لك عمل خاص؟",
    answer: "نعم، أطمح أفتح مشروع أو ستوديو خاص."
  },
  {
    question: "ما الشيء الذي تتمنى تعلمه؟",
    answer: "أبغى أتعلم مونتاج متقدم وبرمجة بسيطة."
  },
  {
    question: "ما هي الوظيفة التي تتمناها؟",
    answer: "ما أبغى وظيفة، أبغى أشتغل لحسابي وأكون مستقل."
  },
  {
    question: "هل تفكر في تأسيس عائلة؟",
    answer: "نعم، في الوقت المناسب."
  },
  {
    question: "هل تحب أن تكون مشهورًا؟",
    answer: "أحب أكون مؤثر أكثر من كوني مشهور."
  },
  {
    question: "ما هو إرثك الذي تريد تركه؟",
    answer: "أني أكون شخص ألهم غيري وخلّى له أثر إيجابي."
  }
]

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "مرحباً! أنا مساعد حمد الذكي. اختر أحد الأسئلة أدناه أو اكتب سؤالك الخاص!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [showQuestions, setShowQuestions] = useState(true)

  const handleQuestionClick = (qa: QA) => {
    // Add user question
    const userMessage: Message = {
      id: Date.now().toString(),
      content: qa.question,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setShowQuestions(false)

    // Add AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: qa.answer,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      
      // Show questions again after response
      setTimeout(() => setShowQuestions(true), 500)
    }, 1000)
  }

  const findAnswer = (userQuestion: string): string => {
    const normalizedQuestion = userQuestion.toLowerCase().trim()
    
    for (const qa of qaData) {
      if (normalizedQuestion.includes(qa.question.toLowerCase()) || 
          qa.question.toLowerCase().includes(normalizedQuestion)) {
        return qa.answer
      }
    }
    
    // Search for keywords in questions
    const keywords = [
      { words: ["تطبيق", "يوميا", "استخدام"], answer: qaData[0].answer },
      { words: ["أندرويد", "ios", "نظام"], answer: qaData[1].answer },
      { words: ["ذكاء", "اصطناعي", "chatgpt"], answer: qaData[2].answer },
      { words: ["يوتيوب", "قناة", "شهير"], answer: qaData[3].answer },
      { words: ["ألعاب", "برمجة"], answer: qaData[4].answer },
      { words: ["تصميم", "جرافيك", "محتوى"], answer: qaData[5].answer },
      { words: ["canva", "photoshop", "تحرير"], answer: qaData[6].answer },
      { words: ["موقع", "شخصي"], answer: qaData[7].answer },
      { words: ["nft", "عملات", "رقمية"], answer: qaData[9].answer },
      { words: ["حلم", "كبير"], answer: qaData[10].answer },
      { words: ["سنوات", "مستقبل"], answer: qaData[11].answer },
      { words: ["مشروع", "شخصي"], answer: qaData[12].answer },
      { words: ["بلد", "آخر", "عيش"], answer: qaData[13].answer },
      { words: ["عمل", "خاص"], answer: qaData[14].answer },
      { words: ["تعلم", "مونتاج"], answer: qaData[15].answer },
      { words: ["وظيفة", "مستقل"], answer: qaData[16].answer },
      { words: ["عائلة", "تأسيس"], answer: qaData[17].answer },
      { words: ["مشهور", "مؤثر"], answer: qaData[18].answer },
      { words: ["إرث", "أثر"], answer: qaData[19].answer }
    ]
    
    for (const keyword of keywords) {
      if (keyword.words.some(word => normalizedQuestion.includes(word))) {
        return keyword.answer
      }
    }
    
    return "آسف، لا أستطيع الإجابة على هذا السؤال حالياً. جرب سؤال آخر عن حمد ابن راشد!"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: findAnswer(inputValue),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="bg-card/95 backdrop-blur-lg border-border/50 shadow-strong animate-scale-in">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary animate-glow" />
              مساعد حمد الذكي
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <ScrollArea className="h-80 pr-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isUser 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.isUser ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <img
                          src="/lovable-uploads/2c208b8c-3c36-4609-8793-835cc7fef460.png"
                          alt="المساعد الذكي"
                          className="w-4 h-4 rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className={`rounded-lg px-3 py-2 text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Question Buttons */}
              {showQuestions && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-muted-foreground text-center">اختر سؤالاً:</p>
                  <div className="grid gap-2">
                    {qaData.slice(0, 6).map((qa, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuestionClick(qa)}
                        className="text-right justify-start h-auto py-2 px-3 text-xs leading-relaxed hover:bg-accent/50 border-border/50"
                      >
                        {qa.question}
                      </Button>
                    ))}
                    {qaData.length > 6 && (
                      <details className="group">
                        <summary className="cursor-pointer text-xs text-primary hover:text-primary-glow transition-colors">
                          المزيد من الأسئلة...
                        </summary>
                        <div className="grid gap-2 mt-2">
                          {qaData.slice(6).map((qa, index) => (
                            <Button
                              key={index + 6}
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuestionClick(qa)}
                              className="text-right justify-start h-auto py-2 px-3 text-xs leading-relaxed hover:bg-accent/50 border-border/50"
                            >
                              {qa.question}
                            </Button>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اسأل عن حمد..."
              className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={!inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}