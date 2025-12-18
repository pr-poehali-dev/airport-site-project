import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Hotel {
  id: number;
  name: string;
  category: string;
  price: string;
  distance: string;
  image: string;
  amenities: string[];
  description: string;
}

interface ParkingZone {
  id: number;
  name: string;
  price: string;
  period: string;
  distance: string;
  features: string[];
  description: string;
}

interface Shop {
  id: number;
  name: string;
  category: string;
  zone: string;
  icon: string;
  items: string[];
  hours: string;
  description: string;
}

interface Flight {
  id: number;
  number: string;
  destination: string;
  time: string;
  status: string;
  gate: string;
  type: string;
  airline: string;
  terminal: string;
}

interface ContentSectionsProps {
  activeSection: string;
  hotels: Hotel[];
  parkingZones: ParkingZone[];
  shops: Shop[];
  flights: Flight[];
  getStatusColor: (status: string) => string;
}

const ContentSections = ({
  activeSection,
  hotels,
  parkingZones,
  shops,
  flights,
  getStatusColor
}: ContentSectionsProps) => {
  return (
    <>
      {activeSection === 'hotels' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Отели рядом с аэропортом</h2>
            <p className="text-lg text-muted-foreground">Выберите идеальный вариант для вашего пребывания</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{hotel.image}</div>
                      <div>
                        <CardTitle className="text-xl">{hotel.name}</CardTitle>
                        <CardDescription className="flex items-center mt-2">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {hotel.distance}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">{hotel.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{hotel.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="outline">{amenity}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-2xl font-bold text-primary">{hotel.price} ₽</p>
                        <p className="text-sm text-muted-foreground">за ночь</p>
                      </div>
                      <Button size="lg" className="group">
                        Забронировать
                        <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'parking' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Парковочные зоны</h2>
            <p className="text-lg text-muted-foreground">Удобные и безопасные парковки для вашего автомобиля</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {parkingZones.map((zone) => (
              <Card key={zone.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center">
                        <Icon name="ParkingSquare" className="mr-2 text-primary" size={24} />
                        {zone.name}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {zone.distance}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{zone.price} ₽</p>
                      <p className="text-sm text-muted-foreground">за {zone.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{zone.description}</p>
                    <div className="space-y-2">
                      {zone.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="w-full group">
                      Забронировать место
                      <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'shops' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Магазины и услуги</h2>
            <p className="text-lg text-muted-foreground">Всё необходимое для комфортного путешествия</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map((shop) => (
              <Card key={shop.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{shop.icon}</div>
                  <CardTitle className="text-lg">{shop.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{shop.category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} className="mr-2" />
                      {shop.zone}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} className="mr-2" />
                      {shop.hours}
                    </div>
                    <p className="text-xs text-muted-foreground">{shop.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {shop.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'flights' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Табло рейсов</h2>
            <p className="text-lg text-muted-foreground">Актуальная информация о вылетах и прилётах</p>
          </div>

          <Tabs defaultValue="departure" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="departure">🛫 Вылет</TabsTrigger>
              <TabsTrigger value="arrival">🛬 Прилёт</TabsTrigger>
            </TabsList>

            <TabsContent value="departure">
              <div className="space-y-4">
                {flights.filter(f => f.type === 'departure').map((flight) => (
                  <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{flight.time}</p>
                            <Badge variant="outline" className="mt-2">{flight.gate}</Badge>
                          </div>
                          <div className="h-12 w-px bg-border"></div>
                          <div>
                            <p className="text-xl font-semibold">{flight.destination}</p>
                            <p className="text-sm text-muted-foreground">Рейс {flight.number} • {flight.airline}</p>
                            <p className="text-xs text-muted-foreground">Терминал {flight.terminal}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(flight.status)}>
                          {flight.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arrival">
              <div className="space-y-4">
                {flights.filter(f => f.type === 'arrival').map((flight) => (
                  <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{flight.time}</p>
                            <Badge variant="outline" className="mt-2">{flight.gate}</Badge>
                          </div>
                          <div className="h-12 w-px bg-border"></div>
                          <div>
                            <p className="text-xl font-semibold">{flight.destination}</p>
                            <p className="text-sm text-muted-foreground">Рейс {flight.number} • {flight.airline}</p>
                            <p className="text-xs text-muted-foreground">Терминал {flight.terminal}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(flight.status)}>
                          {flight.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {activeSection === 'contacts' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады помочь вам</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Заполните форму, и мы ответим в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Ваш вопрос или комментарий" />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Phone" className="mr-2 text-primary" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">+7 (800) 555-35-35</p>
                  <p className="text-sm text-muted-foreground">Круглосуточная горячая линия</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mail" className="mr-2 text-primary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold">info@skyport.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" className="mr-2 text-primary" size={24} />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold">г. Москва</p>
                  <p className="text-sm text-muted-foreground">Международный аэропорт SkyPort</p>
                  <p className="text-sm text-muted-foreground mt-2">123456, Аэропортовое шоссе, 1</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentSections;
