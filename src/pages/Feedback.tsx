import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur">
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
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Interview Complete!
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's your detailed performance analysis
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Overall Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">82/100</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Great Performance
                </Badge>
              </div>
              <Progress value={82} className="h-3" />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Clear Communication</p>
                    <p className="text-sm text-muted-foreground">Articulated thoughts well and maintained good pace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Relevant Examples</p>
                    <p className="text-sm text-muted-foreground">Provided concrete examples from past experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Confidence</p>
                    <p className="text-sm text-muted-foreground">Demonstrated confidence throughout the interview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-600">
                  <AlertCircle className="w-5 h-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Structure Responses</p>
                    <p className="text-sm text-muted-foreground">Use STAR method for behavioral questions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Ask Questions</p>
                    <p className="text-sm text-muted-foreground">Prepare thoughtful questions about the role</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Time Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Time Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">28:45</p>
                  <p className="text-sm text-muted-foreground">Total Duration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">5:45</p>
                  <p className="text-sm text-muted-foreground">Avg per Question</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">2.1s</p>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prep">
              <Button size="lg" className="px-8">
                Take Another Interview
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="px-8">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;