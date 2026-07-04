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
import { Info } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 pb-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="outline" className="text-primary border-primary">STEMise EdTech</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Design System Showcase</h1>
          <p className="text-xl text-muted-foreground">
            A developer reference guide for building the new platform.
          </p>
        </div>

        <Separator />

        {/* Colors */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary border"></div>
              <div className="text-sm font-medium">Primary</div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-secondary border"></div>
              <div className="text-sm font-medium">Secondary</div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent border"></div>
              <div className="text-sm font-medium">Accent</div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-destructive border"></div>
              <div className="text-sm font-medium">Destructive</div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted border"></div>
              <div className="text-sm font-medium">Muted</div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Typography (Be Vietnam Pro)</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h1 className="text-4xl font-extrabold lg:text-5xl">Heading 1</h1>
                <p className="text-sm text-muted-foreground mt-1">text-4xl font-extrabold</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
                <p className="text-sm text-muted-foreground mt-1">text-3xl font-semibold</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
                <p className="text-sm text-muted-foreground mt-1">text-2xl font-semibold</p>
              </div>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The quick brown fox jumps over the lazy dog. This is standard paragraph text used throughout the application for descriptions, articles, and general copy.
                </p>
                <p className="text-sm text-muted-foreground mt-1">Standard Paragraph</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Buttons</h2>
          <Card>
            <CardContent className="p-6 flex flex-wrap gap-4 items-center">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="default" disabled>Disabled</Button>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Form Controls */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Form Controls</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Inputs & Selection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="student@stemise.org" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <label htmlFor="airplane-mode" className="text-sm font-medium">Enable Notifications</label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sliders & Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium">Course Progress</label>
                  <Slider defaultValue={[33]} max={100} step={1} />
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can use alerts to grab the user's attention.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Data Display */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Data Display</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabs & Avatars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Student Name</p>
                    <p className="text-sm text-muted-foreground">student@example.com</p>
                  </div>
                </div>

                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <p className="text-sm text-muted-foreground mt-4">Make changes to your account here.</p>
                  </TabsContent>
                  <TabsContent value="password">
                    <p className="text-sm text-muted-foreground mt-4">Change your password here.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Small indicators for status or tags.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Textures & Shapes */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Textures & Shapes</h2>
          <Card>
            <CardHeader>
              <CardTitle>Grid Paper & Floating Elements</CardTitle>
              <CardDescription>
                These backgrounds can be placed inside any relative container with overflow hidden.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[400px] overflow-hidden rounded-xl border bg-white">
                <HeroShapes variant="home" />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <Badge variant="outline" className="bg-white/80 backdrop-blur">
                    Texture Example
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}

export default App;
