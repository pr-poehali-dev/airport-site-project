import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface HeroSectionProps {
  checkInDate?: Date;
  setCheckInDate: (date?: Date) => void;
  checkOutDate?: Date;
  setCheckOutDate: (date?: Date) => void;
  parkingDate?: Date;
  setParkingDate: (date?: Date) => void;
  setActiveSection: (section: string) => void;
}

const HeroSection = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  parkingDate,
  setParkingDate,
  setActiveSection
}: HeroSectionProps) => {
  return (
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
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
