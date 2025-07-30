import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mic, Code, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const InterviewPrep = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-foreground">HireScout</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Prepare for Your Interview
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your interview type and get ready to practice with our AI interviewer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Technical</CardTitle>
                <CardDescription>Coding challenges and technical questions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Behavioral</CardTitle>
                <CardDescription>Situational and behavioral questions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <CardTitle>Mixed</CardTitle>
                <CardDescription>Combination of technical and behavioral</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5" />
                Interview Setup
              </CardTitle>
              <CardDescription>
                Make sure you're ready for your mock interview session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">
                  <Clock className="w-4 h-4 mr-1" />
                  30-45 minutes
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Estimated interview duration
                </span>
              </div>
              
              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Before you start:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Make sure your microphone is working</li>
                  <li>• Find a quiet environment</li>
                  <li>• Have a notepad ready if needed</li>
                  <li>• Relax and do your best!</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/interview">
              <Button size="lg" className="px-12 py-4 text-lg">
                Take Interview Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;