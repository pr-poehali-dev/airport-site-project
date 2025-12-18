import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [parkingDate, setParkingDate] = useState<Date>();

  const hotels = [
    { id: 1, name: 'SkyPort Business Hotel', category: '5 звёзд', price: '12 500', distance: '200м от терминала', image: '🏨', amenities: ['Wi-Fi', 'Завтрак', 'Spa', 'Трансфер'] },
    { id: 2, name: 'Airport Comfort Inn', category: '4 звезды', price: '8 900', distance: '500м от терминала', image: '🏨', amenities: ['Wi-Fi', 'Завтрак', 'Фитнес'] },
    { id: 3, name: 'Transit Hotel Express', category: '3 звезды', price: '5 200', distance: '100м от терминала', image: '🏨', amenities: ['Wi-Fi', 'Трансфер'] },
    { id: 4, name: 'Luxury Sky Suites', category: '5 звёзд', price: '18 000', distance: 'В терминале', image: '🏨', amenities: ['Wi-Fi', 'Завтрак', 'Spa', 'Бассейн', 'Ресторан'] }
  ];

  const parkingZones = [
    { id: 1, name: 'P1 - Краткосрочная', price: '200', period: 'час', distance: '50м от терминала', features: ['Крытая', 'Видеонаблюдение', 'Охрана 24/7'] },
    { id: 2, name: 'P2 - Долгосрочная', price: '800', period: 'сутки', distance: '300м от терминала', features: ['Открытая', 'Видеонаблюдение', 'Трансфер'] },
    { id: 3, name: 'P3 - Премиум', price: '500', period: 'час', distance: 'В терминале', features: ['Крытая', 'Вип-сервис', 'Мойка', 'Охрана'] },
    { id: 4, name: 'P4 - Эконом', price: '400', period: 'сутки', distance: '1км от терминала', features: ['Открытая', 'Охрана', 'Трансфер каждые 15 мин'] }
  ];

  const shops = [
    { id: 1, name: 'Duty Free Shop', category: 'Duty Free', zone: 'После паспортного контроля', icon: '🛍️', items: ['Парфюм', 'Алкоголь', 'Косметика'] },
    { id: 2, name: 'SkyMall', category: 'Сувениры', zone: 'Общая зона', icon: '🎁', items: ['Сувениры', 'Подарки', 'Аксессуары'] },
    { id: 3, name: 'Tech Store', category: 'Электроника', zone: 'Общая зона', icon: '📱', items: ['Гаджеты', 'Аксессуары', 'Наушники'] },
    { id: 4, name: 'Food Court', category: 'Рестораны', zone: 'Все терминалы', icon: '🍽️', items: ['Кафе', 'Рестораны', 'Фаст-фуд'] }
  ];

  const flights = [
    { id: 1, number: 'SU 1234', destination: 'Москва', time: '14:30', status: 'Вылетел', gate: 'A12', type: 'departure' },
    { id: 2, number: 'S7 5678', destination: 'Сочи', time: '15:45', status: 'Посадка', gate: 'B8', type: 'departure' },
    { id: 3, number: 'FV 9012', destination: 'Санкт-Петербург', time: '16:20', status: 'По расписанию', gate: 'C5', type: 'departure' },
    { id: 4, number: 'SU 2345', destination: 'Казань', time: '14:15', status: 'Прибыл', gate: 'A7', type: 'arrival' },
    { id: 5, number: 'S7 6789', destination: 'Екатеринбург', time: '15:30', status: 'Ожидается', gate: 'B3', type: 'arrival' },
    { id: 6, number: 'FV 3456', destination: 'Новосибирск', time: '16:00', status: 'Задержка', gate: 'C9', type: 'arrival' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Вылетел':
      case 'Прибыл':
        return 'bg-green-500';
      case 'Посадка':
        return 'bg-blue-500';
      case 'По расписанию':
      case 'Ожидается':
        return 'bg-gray-500';
      case 'Задержка':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">✈️</div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">SkyPort</h1>
                <p className="text-xs text-muted-foreground">Международный аэропорт</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'hotels', label: 'Отели', icon: 'Hotel' },
                { id: 'parking', label: 'Парковки', icon: 'ParkingSquare' },
                { id: 'shops', label: 'Магазины', icon: 'ShoppingBag' },
                { id: 'flights', label: 'Рейсы', icon: 'Plane' },
                { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <div className="relative bg-gradient-to-r from-primary to-secondary text-white py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-8xl animate-pulse">✈️</div>
              <div className="absolute bottom-20 right-20 text-6xl animate-pulse delay-75">🌍</div>
              <div className="absolute top-40 right-40 text-5xl animate-pulse delay-150">☁️</div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-slide-up">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Добро пожаловать в SkyPort</h2>
                <p className="text-xl md:text-2xl mb-8 text-sky-100">Ваш комфорт — наша главная задача</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="text-lg" onClick={() => setActiveSection('hotels')}>
                    <Icon name="Hotel" className="mr-2" size={20} />
                    Забронировать отель
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setActiveSection('parking')}>
                    <Icon name="ParkingSquare" className="mr-2" size={20} />
                    Парковка
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 -mt-16 relative z-20">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <Tabs defaultValue="hotels" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="hotels">🏨 Отели</TabsTrigger>
                    <TabsTrigger value="parking">🅿️ Парковка</TabsTrigger>
                    <TabsTrigger value="services">🛍️ Услуги</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="hotels">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Заезд</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <Icon name="CalendarDays" className="mr-2" size={16} />
                              {checkInDate ? format(checkInDate, 'PP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Выезд</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <Icon name="CalendarDays" className="mr-2" size={16} />
                              {checkOutDate ? format(checkOutDate, 'PP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Гостей</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Количество гостей" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 гость</SelectItem>
                            <SelectItem value="2">2 гостя</SelectItem>
                            <SelectItem value="3">3 гостя</SelectItem>
                            <SelectItem value="4">4+ гостей</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <Button className="w-full" size="lg" onClick={() => setActiveSection('hotels')}>
                          <Icon name="Search" className="mr-2" size={18} />
                          Найти отели
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="parking">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Дата прибытия</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <Icon name="CalendarDays" className="mr-2" size={16} />
                              {parkingDate ? format(parkingDate, 'PP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={parkingDate} onSelect={setParkingDate} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Тип парковки</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите зону" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short">Краткосрочная</SelectItem>
                            <SelectItem value="long">Долгосрочная</SelectItem>
                            <SelectItem value="premium">Премиум</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <Button className="w-full" size="lg" onClick={() => setActiveSection('parking')}>
                          <Icon name="Search" className="mr-2" size={18} />
                          Забронировать
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="services">
                    <div className="text-center py-4">
                      <p className="text-lg text-muted-foreground mb-4">Дополнительные услуги аэропорта</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <Button variant="outline" onClick={() => setActiveSection('shops')}>
                          <Icon name="ShoppingBag" className="mr-2" size={18} />
                          Магазины
                        </Button>
                        <Button variant="outline">
                          <Icon name="UtensilsCrossed" className="mr-2" size={18} />
                          Рестораны
                        </Button>
                        <Button variant="outline">
                          <Icon name="Wifi" className="mr-2" size={18} />
                          Wi-Fi
                        </Button>
                        <Button variant="outline">
                          <Icon name="Luggage" className="mr-2" size={18} />
                          Камера хранения
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="container mx-auto px-4 py-20">
            <h3 className="text-3xl font-bold text-center mb-12">Наши преимущества</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: 'Clock', title: 'Работаем 24/7', desc: 'Круглосуточный сервис' },
                { icon: 'ShieldCheck', title: 'Безопасность', desc: 'Высокий уровень защиты' },
                { icon: 'Sparkles', title: 'Комфорт', desc: 'Премиальное обслуживание' },
                { icon: 'Headphones', title: 'Поддержка', desc: 'Всегда на связи' }
              ].map((feature, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{flight.time}</p>
                            <Badge variant="outline" className="mt-2">{flight.gate}</Badge>
                          </div>
                          <div className="h-12 w-px bg-border"></div>
                          <div>
                            <p className="text-xl font-semibold">{flight.destination}</p>
                            <p className="text-sm text-muted-foreground">Рейс {flight.number}</p>
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold">{flight.time}</p>
                            <Badge variant="outline" className="mt-2">{flight.gate}</Badge>
                          </div>
                          <div className="h-12 w-px bg-border"></div>
                          <div>
                            <p className="text-xl font-semibold">{flight.destination}</p>
                            <p className="text-sm text-muted-foreground">Рейс {flight.number}</p>
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

      <footer className="bg-secondary text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-2">✈️</span>
                SkyPort
              </h3>
              <p className="text-sky-200">Ваш комфорт — наша главная задача</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sky-200">
                <li>Отели</li>
                <li>Парковки</li>
                <li>Магазины</li>
                <li>VIP-залы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sky-200">
                <li>О нас</li>
                <li>Правила</li>
                <li>FAQ</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sky-200">
                <li>+7 (800) 555-35-35</li>
                <li>info@skyport.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sky-700 mt-8 pt-8 text-center text-sky-200">
            <p>© 2024 SkyPort. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
