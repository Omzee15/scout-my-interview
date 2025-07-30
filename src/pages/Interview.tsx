import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Square, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Interview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState("00:00");

  const questions = [
    "Tell me about yourself and your background.",
    "What interests you about this role?",
    "Describe a challenging project you've worked on.",
    "How do you handle working under pressure?",
    "Where do you see yourself in 5 years?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-foreground">HireScout</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline">Question {currentQuestion}/5</Badge>
            <Badge variant="secondary">{timeElapsed}</Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* AI Interviewer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">AI Interviewer</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl text-white">🤖</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-lg font-medium mb-2">Current Question:</p>
                  <p className="text-muted-foreground">
                    {questions[currentQuestion - 1]}
                  </p>
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button
                    variant={isRecording ? "destructive" : "default"}
                    size="lg"
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="w-5 h-5 mr-2" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="w-5 h-5 mr-2" />
                        Start Recording
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Area */}
          <Card>
            <CardHeader>
              <CardTitle>Your Response</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-48 bg-accent/20 rounded-lg p-4 border-2 border-dashed border-accent">
                <p className="text-muted-foreground text-center pt-20">
                  {isRecording ? "🎤 Recording your response..." : "Click 'Start Recording' to begin"}
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  disabled={currentQuestion === 1}
                  onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
                >
                  Previous
                </Button>
                <Button 
                  className="flex-1"
                  disabled={currentQuestion === 5}
                  onClick={() => setCurrentQuestion(Math.min(5, currentQuestion + 1))}
                >
                  Next Question
                </Button>
              </div>
              
              {currentQuestion === 5 && (
                <Link to="/feedback" className="block">
                  <Button size="lg" className="w-full">
                    <Square className="w-5 h-5 mr-2" />
                    End Interview
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Interview;