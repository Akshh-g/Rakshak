import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin, Clock, Shield, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingDetails {
  serviceType: string;
  location: string;
  date: Date | undefined;
  startTime: string;
  duration: string;
}

interface Guard {
  id: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  hourlyRate: number;
  verified: boolean;
}

const mockGuards: Guard[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    image: "/placeholder.svg",
    specialty: "Event Security Specialist",
    rating: 4.9,
    reviews: 127,
    experience: "8+ years",
    hourlyRate: 2500,
    verified: true,
  },
  {
    id: "2", 
    name: "Priya Sharma",
    image: "/placeholder.svg",
    specialty: "Personal Protection Expert",
    rating: 4.8,
    reviews: 89,
    experience: "6+ years", 
    hourlyRate: 3000,
    verified: true,
  },
  {
    id: "3",
    name: "Arjun Singh",
    image: "/placeholder.svg",
    specialty: "Corporate Security Officer",
    rating: 4.9,
    reviews: 156,
    experience: "10+ years",
    hourlyRate: 2800,
    verified: true,
  },
];

export default function Booking() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    serviceType: "",
    location: "",
    date: undefined,
    startTime: "",
    duration: "",
  });
  const [selectedGuard, setSelectedGuard] = useState<Guard | null>(null);

  const handleServiceSubmit = () => {
    if (bookingDetails.serviceType && bookingDetails.location && bookingDetails.date && bookingDetails.startTime && bookingDetails.duration) {
      setCurrentStep(2);
    }
  };

  const handleGuardSelect = (guard: Guard) => {
    setSelectedGuard(guard);
    setCurrentStep(3);
  };

  const calculateTotal = () => {
    if (!selectedGuard || !bookingDetails.duration) return 0;
    return selectedGuard.hourlyRate * parseInt(bookingDetails.duration);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {currentStep > step ? <CheckCircle className="h-4 w-4" /> : step}
            </div>
            {step < 3 && (
              <div className={`w-12 h-0.5 ml-2 ${currentStep > step ? 'bg-primary' : 'bg-muted'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Service Details
        </CardTitle>
        <CardDescription>
          Tell us about your security requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select onValueChange={(value) => setBookingDetails({...bookingDetails, serviceType: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal-protection">Personal Protection</SelectItem>
              <SelectItem value="event-security">Event Security</SelectItem>
              <SelectItem value="corporate-security">Corporate Security</SelectItem>
              <SelectItem value="vip-escort">VIP Escort Service</SelectItem>
              <SelectItem value="residential-security">Residential Security</SelectItem>
              <SelectItem value="travel-security">Travel Security</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter city or specific address"
            value={bookingDetails.location}
            onChange={(e) => setBookingDetails({...bookingDetails, location: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !bookingDetails.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {bookingDetails.date ? format(bookingDetails.date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={bookingDetails.date}
                  onSelect={(date) => setBookingDetails({...bookingDetails, date})}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Start Time</Label>
            <Select onValueChange={(value) => setBookingDetails({...bookingDetails, startTime: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="13:00">01:00 PM</SelectItem>
                <SelectItem value="14:00">02:00 PM</SelectItem>
                <SelectItem value="15:00">03:00 PM</SelectItem>
                <SelectItem value="16:00">04:00 PM</SelectItem>
                <SelectItem value="17:00">05:00 PM</SelectItem>
                <SelectItem value="18:00">06:00 PM</SelectItem>
                <SelectItem value="19:00">07:00 PM</SelectItem>
                <SelectItem value="20:00">08:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Duration</Label>
          <Select onValueChange={(value) => setBookingDetails({...bookingDetails, duration: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 Hours</SelectItem>
              <SelectItem value="4">4 Hours</SelectItem>
              <SelectItem value="6">6 Hours</SelectItem>
              <SelectItem value="8">8 Hours</SelectItem>
              <SelectItem value="12">12 Hours</SelectItem>
              <SelectItem value="24">24 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleServiceSubmit} 
          className="w-full"
          disabled={!bookingDetails.serviceType || !bookingDetails.location || !bookingDetails.date || !bookingDetails.startTime || !bookingDetails.duration}
        >
          Find Available Guards
        </Button>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => setCurrentStep(1)} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Details
        </Button>
        <h2 className="text-2xl font-bold text-center">Available Guards</h2>
        <p className="text-muted-foreground text-center mt-2">
          Choose your preferred security professional
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGuards.map((guard) => (
          <Card key={guard.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={guard.image} alt={guard.name} />
                    <AvatarFallback>{guard.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {guard.verified && (
                    <Badge className="absolute -top-2 -right-2 bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{guard.name}</h3>
                  <p className="text-sm text-muted-foreground">{guard.specialty}</p>
                  <p className="text-xs text-muted-foreground">{guard.experience}</p>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="font-medium">{guard.rating}</span>
                  <span className="text-sm text-muted-foreground">({guard.reviews} reviews)</span>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">₹{guard.hourlyRate}</p>
                  <p className="text-sm text-muted-foreground">per hour</p>
                </div>

                <Button 
                  onClick={() => handleGuardSelect(guard)}
                  className="w-full"
                >
                  Select Guard
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setCurrentStep(2)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle>Booking Summary</CardTitle>
            <CardDescription>Review your booking details</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Selected Guard */}
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <Avatar className="h-16 w-16">
            <AvatarImage src={selectedGuard?.image} alt={selectedGuard?.name} />
            <AvatarFallback>{selectedGuard?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{selectedGuard?.name}</h3>
            <p className="text-sm text-muted-foreground">{selectedGuard?.specialty}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3 w-3 fill-gold text-gold" />
              <span className="text-sm">{selectedGuard?.rating} ({selectedGuard?.reviews} reviews)</span>
            </div>
          </div>
          <Badge className="bg-green-500">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        </div>

        {/* Booking Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span>Service Type</span>
            </div>
            <span className="font-medium capitalize">{bookingDetails.serviceType.replace('-', ' ')}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Location</span>
            </div>
            <span className="font-medium">{bookingDetails.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span>Date & Time</span>
            </div>
            <span className="font-medium">
              {bookingDetails.date && format(bookingDetails.date, "PPP")} at {bookingDetails.startTime}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Duration</span>
            </div>
            <span className="font-medium">{bookingDetails.duration} hours</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Rate per hour</span>
            <span>₹{selectedGuard?.hourlyRate}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration</span>
            <span>{bookingDetails.duration} hours</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span className="text-primary">₹{calculateTotal().toLocaleString()}</span>
          </div>
        </div>

        <Button 
          onClick={() => navigate('/auth?redirect=checkout')} 
          className="w-full" 
          size="lg"
        >
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Bodyguard
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional security services tailored to your needs
          </p>
        </div>

        {renderStepIndicator()}

        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </div>
  );
}