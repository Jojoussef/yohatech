import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">Our Projects</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        Explore our innovative solutions across AI, robotics, custom electronics, and smart home technologies.
      </p>

      <Tabs defaultValue="all" className="w-full mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="ai">AI Systems</TabsTrigger>
            <TabsTrigger value="robotics">Robotics</TabsTrigger>
            <TabsTrigger value="electronics">Electronics</TabsTrigger>
            <TabsTrigger value="smarthome">Smart Home</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Project */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Vision System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AI Vision System</CardTitle>
                  <Badge className="bg-primary">AI</Badge>
                </div>
                <CardDescription>Advanced computer vision system for manufacturing quality control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI-powered vision system helps manufacturing plants detect defects with 99.7% accuracy, reducing
                  waste and improving product quality.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Robotics Project */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interactive Robot"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>TechBot Assistant</CardTitle>
                  <Badge className="bg-secondary text-white">Robotics</Badge>
                </div>
                <CardDescription>Interactive robot for customer service and assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TechBot provides interactive customer assistance in retail environments, with natural language
                  processing and autonomous navigation capabilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Electronics Project */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Custom PCB" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>SmartBoard Micro</CardTitle>
                  <Badge>Electronics</Badge>
                </div>
                <CardDescription>Custom electronic board for IoT applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our energy-efficient microcontroller board features integrated sensors and wireless connectivity for a
                  wide range of IoT applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Smart Home Project */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart Home System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>HomeConnect Hub</CardTitle>
                  <Badge variant="outline">Smart Home</Badge>
                </div>
                <CardDescription>Integrated smart home control system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our comprehensive smart home solution integrates lighting, climate, security, and entertainment
                  systems into a single, user-friendly interface.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* AI Project 2 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Predictive Maintenance System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>PredictMaint AI</CardTitle>
                  <Badge className="bg-primary">AI</Badge>
                </div>
                <CardDescription>Predictive maintenance system for industrial equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI-driven predictive maintenance solution analyzes equipment data to forecast failures before they
                  occur, reducing downtime by up to 78%.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Robotics Project 2 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural Robot"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriBot</CardTitle>
                  <Badge className="bg-secondary text-white">Robotics</Badge>
                </div>
                <CardDescription>Autonomous agricultural robot for precision farming</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AgriBot autonomously monitors crop health, applies targeted treatments, and harvests produce,
                  increasing yields while reducing resource usage.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Projects Only */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Vision System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AI Vision System</CardTitle>
                  <Badge className="bg-primary">AI</Badge>
                </div>
                <CardDescription>Advanced computer vision system for manufacturing quality control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI-powered vision system helps manufacturing plants detect defects with 99.7% accuracy, reducing
                  waste and improving product quality.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Predictive Maintenance System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>PredictMaint AI</CardTitle>
                  <Badge className="bg-primary">AI</Badge>
                </div>
                <CardDescription>Predictive maintenance system for industrial equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI-driven predictive maintenance solution analyzes equipment data to forecast failures before they
                  occur, reducing downtime by up to 78%.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Similar TabsContent for other categories */}
        <TabsContent value="robotics" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Robotics Projects */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interactive Robot"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>TechBot Assistant</CardTitle>
                  <Badge className="bg-secondary text-white">Robotics</Badge>
                </div>
                <CardDescription>Interactive robot for customer service and assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TechBot provides interactive customer assistance in retail environments, with natural language
                  processing and autonomous navigation capabilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural Robot"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriBot</CardTitle>
                  <Badge className="bg-secondary text-white">Robotics</Badge>
                </div>
                <CardDescription>Autonomous agricultural robot for precision farming</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AgriBot autonomously monitors crop health, applies targeted treatments, and harvests produce,
                  increasing yields while reducing resource usage.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="electronics" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electronics Projects */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Custom PCB" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>SmartBoard Micro</CardTitle>
                  <Badge>Electronics</Badge>
                </div>
                <CardDescription>Custom electronic board for IoT applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our energy-efficient microcontroller board features integrated sensors and wireless connectivity for a
                  wide range of IoT applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="smarthome" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Home Projects */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart Home System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>HomeConnect Hub</CardTitle>
                  <Badge variant="outline">Smart Home</Badge>
                </div>
                <CardDescription>Integrated smart home control system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our comprehensive smart home solution integrates lighting, climate, security, and entertainment
                  systems into a single, user-friendly interface.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4 text-primary">Have a Project in Mind?</h2>
        <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
          We're always excited to take on new challenges and create innovative solutions. Let's discuss how we can turn
          your ideas into reality.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Contact Us Today
        </Button>
      </div>
    </div>
  )
}
