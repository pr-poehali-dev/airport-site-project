import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
