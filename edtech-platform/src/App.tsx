import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Switch } from './components/ui/switch';
import { Slider } from './components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Separator } from './components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { HeroShapes } from './components/ui/hero-shapes';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './components/ui/dialog';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';
import { Progress } from './components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
import { Info, Palette, Type, MousePointer2, FormInput, LayoutTemplate, Box, Sparkles, Flame, Trophy, Target, Star, ShieldCheck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'buttons', label: 'Interactive Buttons', icon: MousePointer2 },
  { id: 'form-controls', label: 'Path Selection', icon: FormInput },
  { id: 'data-display', label: 'Achievements', icon: LayoutTemplate },
  { id: 'interactive', label: 'Gamification', icon: Box },
  { id: 'textures', label: 'Dynamic Backgrounds', icon: Sparkles },
];

function App() {
  const [activeSection, setActiveSection] = useState('colors');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-vietnam">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-12 space-y-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground px-4">Design System</h3>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left ${
                      isActive 
                        ? 'bg-primary/10 text-primary border-2 border-primary/20' 
                        : 'text-muted-foreground hover:bg-muted border-2 border-transparent hover:text-foreground'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'opacity-70'}`} />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-20 pb-32">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-[#0f1a38]">
              STEMise UI Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Gamified, interactive, and beautifully crafted components for the next generation of STEM education.
            </p>
          </div>

          {/* Colors */}
          <section id="colors" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Colors</h2>
              <p className="text-muted-foreground mt-2 font-medium">Vibrant and engaging brand colors.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: 'Primary', class: 'bg-[#0f1a38]', text: 'text-white', hex: '#0f1a38' },
                { name: 'Secondary', class: 'bg-[#f1f5f9]', text: 'text-slate-900', hex: '#f1f5f9' },
                { name: 'Accent', class: 'bg-[#e4f4c0]', text: 'text-[#1a2e05]', hex: '#e4f4c0' },
                { name: 'Destructive', class: 'bg-[#ef4444]', text: 'text-white', hex: '#ef4444' },
                { name: 'Muted', class: 'bg-[#f8fafc]', text: 'text-slate-500', hex: '#f8fafc' },
              ].map(color => (
                <div key={color.name} className="group space-y-3">
                  <div className={`h-32 rounded-3xl ${color.class} ${color.text} border-2 border-transparent hover:border-black/10 shadow-sm flex items-end p-4 transition-transform group-hover:-translate-y-1`}>
                    <span className="font-mono text-xs font-bold opacity-90">{color.hex}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono mt-1 font-semibold">{color.class}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="bg-muted/60" />

          {/* Typography */}
          <section id="typography" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Typography</h2>
              <p className="text-muted-foreground mt-2 font-medium">Powered by <span className="font-bold text-foreground">Be Vietnam Pro</span>.</p>
            </div>
            <Card className="overflow-hidden border-2 rounded-3xl shadow-sm">
              <CardContent className="p-0">
                <div className="divide-y divide-muted/60">
                  <div className="p-8 grid md:grid-cols-[1fr_3fr] gap-6 items-center">
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Heading 1</div>
                    <div className="text-5xl font-extrabold tracking-tight text-[#0f1a38]">Start your journey!</div>
                  </div>
                  <div className="p-8 grid md:grid-cols-[1fr_3fr] gap-6 items-center bg-muted/20">
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Heading 2</div>
                    <div className="text-4xl font-extrabold tracking-tight text-[#0f1a38]">Unlock new skills.</div>
                  </div>
                  <div className="p-8 grid md:grid-cols-[1fr_3fr] gap-6 items-center">
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Heading 3</div>
                    <div className="text-3xl font-bold tracking-tight text-[#0f1a38]">Daily Quests</div>
                  </div>
                  <div className="p-8 grid md:grid-cols-[1fr_3fr] gap-6 items-start bg-muted/20">
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider pt-2">Paragraph</div>
                    <p className="leading-relaxed text-lg text-muted-foreground max-w-2xl font-medium">
                      STEMise is an international youth-led nonprofit focused on making STEM more accessible through hands-on kits, open curriculum, and practical learning experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-muted/60" />

          {/* Buttons */}
          <section id="buttons" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Interactive Buttons</h2>
              <p className="text-muted-foreground mt-2 font-medium">Bubbly, gamified buttons with 3D press effects.</p>
            </div>
            <Card className="border-2 rounded-3xl shadow-sm">
              <CardContent className="p-10 flex flex-wrap gap-6 items-center bg-[url('/noise.png')] rounded-3xl">
                <Button className="bg-[#0f1a38] text-white hover:bg-[#1a2b5e] rounded-2xl border-b-[5px] border-[#070d1f] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold">
                  Start Lesson
                </Button>
                <Button className="bg-[#e4f4c0] text-[#1a2e05] hover:bg-[#d4f09a] rounded-2xl border-b-[5px] border-[#adc778] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold">
                  Check Answer
                </Button>
                <Button className="bg-[#ef4444] text-white hover:bg-[#dc2626] rounded-2xl border-b-[5px] border-[#991b1b] active:border-b-0 active:translate-y-[5px] transition-all h-14 px-8 text-lg font-bold">
                  Skip
                </Button>
                <Button className="bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 rounded-2xl border-b-[5px] border-b-slate-300 active:border-b-2 active:translate-y-[3px] transition-all h-14 px-8 text-lg font-bold">
                  Review
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-muted/60" />

          {/* Form Controls */}
          <section id="form-controls" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Path Selection</h2>
              <p className="text-muted-foreground mt-2 font-medium">Interactive forms tailored for learners.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="font-extrabold">Choose Your Path</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">What do you want to learn?</label>
                    <Input placeholder="e.g. Robotics, Circuitry..." className="h-14 rounded-2xl border-2 font-medium text-lg px-4" />
                  </div>
                  <div className="flex items-center space-x-4 p-5 border-2 rounded-2xl bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors group">
                    <Checkbox id="terms" className="h-6 w-6 rounded-lg border-2" />
                    <label htmlFor="terms" className="text-base font-bold cursor-pointer flex-1">
                      Enable Daily Reminders
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-5 border-2 rounded-2xl bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors">
                    <div className="space-y-1">
                      <label htmlFor="hard-mode" className="text-base font-bold cursor-pointer">Hard Mode</label>
                      <p className="text-sm text-muted-foreground font-medium">Double XP, no hints allowed.</p>
                    </div>
                    <Switch id="hard-mode" className="scale-125 mr-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="font-extrabold">Learning Intensity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6 p-6 border-2 rounded-2xl bg-muted/20">
                    <div className="flex justify-between items-end">
                      <label className="text-base font-bold flex items-center gap-2">
                        <Flame className="h-5 w-5 text-orange-500 fill-orange-500" />
                        Daily XP Goal
                      </label>
                      <span className="text-xl font-extrabold text-[#0f1a38]">15 / 50</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} className="h-3 cursor-pointer" />
                  </div>
                  <Alert className="bg-[#fff0e3] border-[#ffdcc2] text-[#8a3b00] rounded-2xl border-2">
                    <Target className="h-6 w-6 stroke-[#8a3b00]" />
                    <AlertTitle className="font-extrabold text-lg">Goal Updated!</AlertTitle>
                    <AlertDescription className="font-medium text-base mt-1">
                      You are now committed to learning 15 minutes a day.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-muted/60" />

          {/* Data Display */}
          <section id="data-display" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Achievements & Profiles</h2>
              <p className="text-muted-foreground mt-2 font-medium">Rewarding users for their progress.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="font-extrabold">Learner Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-5 rounded-2xl border-2 bg-muted/20">
                    <Avatar className="h-16 w-16 border-4 border-[#e4f4c0] shadow-sm">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="font-bold text-lg bg-[#0f1a38] text-white">ST</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-extrabold leading-none">Student Name</p>
                      <p className="text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wider flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" /> Level 12 Builder
                      </p>
                    </div>
                  </div>

                  <Tabs defaultValue="stats" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 rounded-xl h-12">
                      <TabsTrigger value="stats" className="rounded-lg font-bold">Statistics</TabsTrigger>
                      <TabsTrigger value="friends" className="rounded-lg font-bold">Friends</TabsTrigger>
                    </TabsList>
                    <TabsContent value="stats" className="p-5 border-2 rounded-2xl mt-4 bg-white">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-muted-foreground">Total XP</span>
                        <span className="font-extrabold text-xl">4,250</span>
                      </div>
                    </TabsContent>
                    <TabsContent value="friends" className="p-5 border-2 rounded-2xl mt-4 bg-white">
                      <p className="text-sm font-medium text-muted-foreground text-center py-2">Add friends to compete!</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card className="border-2 rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="font-extrabold">Achievement Badges</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Badge className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 px-4 py-2 text-sm font-extrabold rounded-xl border-b-4 border-yellow-600 flex gap-2 items-center">
                    <Star className="h-4 w-4 fill-yellow-950" /> Perfect Score
                  </Badge>
                  <Badge className="bg-blue-400 hover:bg-blue-500 text-blue-950 px-4 py-2 text-sm font-extrabold rounded-xl border-b-4 border-blue-600 flex gap-2 items-center">
                    <ShieldCheck className="h-4 w-4" /> First Kit Built
                  </Badge>
                  <Badge className="bg-purple-400 hover:bg-purple-500 text-purple-950 px-4 py-2 text-sm font-extrabold rounded-xl border-b-4 border-purple-600 flex gap-2 items-center">
                    <Zap className="h-4 w-4 fill-purple-950" /> Early Bird
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-extrabold rounded-xl border-2 bg-white flex gap-2 items-center text-muted-foreground">
                    Locked
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-muted/60" />

          {/* Gamification */}
          <section id="interactive" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Gamification Elements</h2>
              <p className="text-muted-foreground mt-2 font-medium">Modals, streaks, and course curriculum layouts.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="font-extrabold">Course Curriculum</CardTitle>
                  <CardDescription className="font-medium">Expandable units for learning paths.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full border-2 rounded-2xl px-5 bg-white">
                    <AccordionItem value="item-1" className="border-b-2">
                      <AccordionTrigger className="hover:no-underline font-extrabold text-lg py-5">
                        <div className="flex flex-col items-start text-left gap-1">
                          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Unit 1</span>
                          Introduction to Robotics
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-medium text-base pb-6 leading-relaxed">
                        Learn the fundamental building blocks of moving machines, sensors, and basic logic.
                        <Button className="w-full mt-4 bg-[#e4f4c0] text-[#1a2e05] hover:bg-[#d4f09a] rounded-xl font-bold h-12">Start Unit 1</Button>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-2">
                      <AccordionTrigger className="hover:no-underline font-extrabold text-lg py-5">
                        <div className="flex flex-col items-start text-left gap-1">
                          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Unit 2</span>
                          Circuitry Basics
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-medium text-base pb-6 leading-relaxed">
                        Master the flow of electricity by building series and parallel circuits.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-0">
                      <AccordionTrigger className="hover:no-underline font-extrabold text-lg py-5 text-muted-foreground">
                        <div className="flex flex-col items-start text-left gap-1">
                          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex gap-2 items-center">
                            Unit 3 <Badge variant="outline" className="text-[10px] py-0">Locked</Badge>
                          </span>
                          Coding the Brain
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-medium text-base pb-6 leading-relaxed">
                        Complete Unit 2 to unlock this module.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-2 rounded-3xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-extrabold">Reward Modals</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-4 items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#0f1a38] text-white hover:bg-[#1a2b5e] rounded-2xl border-b-[4px] border-[#070d1f] active:border-b-0 active:translate-y-[4px] transition-all h-12 px-6 font-bold w-full">
                          Trigger "Level Up!"
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[400px] border-4 border-[#e4f4c0] rounded-3xl text-center p-8 bg-white shadow-2xl">
                        <DialogHeader className="flex flex-col items-center space-y-4">
                          <div className="h-24 w-24 bg-[#e4f4c0] rounded-full flex items-center justify-center border-4 border-white shadow-lg -mt-16">
                            <Star className="h-12 w-12 text-[#1a2e05] fill-[#1a2e05]" />
                          </div>
                          <DialogTitle className="text-3xl font-extrabold text-[#0f1a38]">Level Up!</DialogTitle>
                          <DialogDescription className="text-lg font-medium text-muted-foreground pt-2">
                            You've reached <strong className="text-foreground">Level 13 Builder</strong>! Keep up the amazing work.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mt-6 sm:justify-center">
                          <Button type="button" className="w-full bg-[#0f1a38] text-white hover:bg-[#1a2b5e] rounded-2xl border-b-[5px] border-[#070d1f] active:border-b-0 active:translate-y-[5px] transition-all h-14 text-lg font-bold">
                            Claim Reward
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card className="border-2 rounded-3xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-extrabold">Streak & Tooltips</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-8 items-center p-8 bg-muted/30 rounded-3xl mx-6 mb-6 justify-center">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="flex items-center gap-2 font-extrabold text-2xl text-orange-500 hover:text-orange-600 transition-colors">
                          <Flame className="h-8 w-8 fill-orange-500" /> 7
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 p-5 shadow-xl rounded-2xl border-2 text-center" side="top">
                        <div className="space-y-2">
                          <h4 className="text-lg font-extrabold text-orange-500">7 Day Streak!</h4>
                          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                            You're on fire! Complete a lesson tomorrow to reach 8 days.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="flex items-center gap-2 font-extrabold text-2xl text-blue-500 hover:text-blue-600 transition-colors">
                            <Zap className="h-8 w-8 fill-blue-500" /> 450
                          </button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={10} className="font-bold px-4 py-2 shadow-lg rounded-xl bg-[#0f1a38] text-white">
                          <p>Your Energy Points</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator className="bg-muted/60" />

          {/* Textures & Shapes */}
          <section id="textures" className="space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Dynamic Backgrounds</h2>
              <p className="text-muted-foreground mt-2 font-medium">Use these SVG textures behind menus or game screens.</p>
            </div>
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl bg-white">
                  <HeroShapes variant="home" />
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
