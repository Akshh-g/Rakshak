import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Phone, 
  Mail, 
  User, 
  Settings,
  CreditCard,
  CheckCircle,
  AlertCircle,
  LogOut
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  guardName: string;
  guardImage: string;
  serviceType: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  status: "upcoming" | "completed" | "cancelled";
  amount: number;
  rating?: number;
}

const mockBookings: Booking[] = [
  {
    id: "1",
    guardName: "Rajesh Kumar",
    guardImage: "/placeholder.svg",
    serviceType: "Event Security",
    date: "2025-01-15",
    time: "10:00 AM",
    duration: "8 hours",
    location: "Taj Palace Hotel, Delhi",
    status: "upcoming",
    amount: 20000,
  },
  {
    id: "2", 
    guardName: "Priya Sharma",
    guardImage: "/placeholder.svg",
    serviceType: "Personal Protection",
    date: "2024-12-28",
    time: "6:00 PM",
    duration: "4 hours",
    location: "Connaught Place, Delhi",
    status: "completed",
    amount: 12000,
    rating: 5,
  },
  {
    id: "3",
    guardName: "Arjun Singh",
    guardImage: "/placeholder.svg",
    serviceType: "Corporate Security",
    date: "2024-12-20",
    time: "9:00 AM",
    duration: "12 hours",
    location: "Tech Park, Gurgaon",
    status: "completed",
    amount: 33600,
    rating: 4,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const activeTab = searchParams.get('tab') || 'overview';
  
  const [user] = useState({
    name: "Akshat Goswami",
    email: "akshatgoswami2006@gmail.com",
    phone: "+91 9753873378",
    memberSince: "December 2024",
    totalBookings: 3,
    totalSpent: 65600,
  });

  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');
  const pastBookings = mockBookings.filter(b => b.status === 'completed');

  const handleLogout = () => {
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
  };

  const renderBookingCard = (booking: Booking) => (
    <Card key={booking.id} className="mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={booking.guardImage} alt={booking.guardName} />
            <AvatarFallback>{booking.guardName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{booking.guardName}</h3>
                <p className="text-muted-foreground">{booking.serviceType}</p>
              </div>
              <Badge 
                variant={booking.status === 'upcoming' ? 'default' : 'secondary'}
                className={booking.status === 'upcoming' ? 'bg-green-500' : ''}
              >
                {booking.status === 'upcoming' ? 'Confirmed' : 'Completed'}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(booking.date).toLocaleDateString()} at {booking.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{booking.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{booking.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-primary">₹{booking.amount.toLocaleString()}</span>
              {booking.rating && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="text-sm">You rated {booking.rating}/5</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            {booking.status === 'upcoming' && (
              <>
                <Button size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Guard
                </Button>
                <Button variant="outline" size="sm">
                  Modify Booking
                </Button>
              </>
            )}
            {booking.status === 'completed' && !booking.rating && (
              <Button size="sm">
                <Star className="h-4 w-4 mr-2" />
                Rate Service
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCheckout = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Complete Your Booking
        </CardTitle>
        <CardDescription>
          Finalize your security service booking
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Guard: Rajesh Kumar</span>
              <span>Event Security</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span>Jan 15, 2025 at 10:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>8 hours</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>₹20,000</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Payment Method</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-16 flex-col">
              <CreditCard className="h-6 w-6 mb-1" />
              <span className="text-sm">Card Payment</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Phone className="h-6 w-6 mb-1" />
              <span className="text-sm">UPI Payment</span>
            </Button>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => {
            toast({
              title: "Booking Confirmed!",
              description: "Your security service has been booked successfully.",
            });
            navigate('/dashboard');
          }}
        >
          Confirm & Pay ₹20,000
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-lg">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">Member since {user.memberSince}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Bookings:</span>
                    <span className="font-medium">{user.totalBookings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Spent:</span>
                    <span className="font-medium">₹{user.totalSpent.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6" 
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button onClick={() => navigate('/book')}>
                <Shield className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={(value) => navigate(`/dashboard?tab=${value}`)}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="checkout">Checkout</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{upcomingBookings.length}</p>
                          <p className="text-sm text-muted-foreground">Upcoming Bookings</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{pastBookings.length}</p>
                          <p className="text-sm text-muted-foreground">Completed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gold/20 p-3 rounded-full">
                          <Star className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">4.7</p>
                          <p className="text-sm text-muted-foreground">Avg Rating Given</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  {mockBookings.slice(0, 2).map(renderBookingCard)}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
                  {upcomingBookings.length > 0 ? (
                    upcomingBookings.map(renderBookingCard)
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No upcoming bookings</h3>
                        <p className="text-muted-foreground mb-4">Book a bodyguard to get started</p>
                        <Button onClick={() => navigate('/book')}>
                          <Shield className="h-4 w-4 mr-2" />
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Booking History</h2>
                  {pastBookings.map(renderBookingCard)}
                </div>
              </TabsContent>

              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Full Name</Label>
                        <p className="text-lg">{user.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Email</Label>
                        <p className="text-lg">{user.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Phone</Label>
                        <p className="text-lg">{user.phone}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Member Since</Label>
                        <p className="text-lg">{user.memberSince}</p>
                      </div>
                    </div>
                    <Button className="mt-6">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="checkout" className="mt-6">
                {renderCheckout()}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}