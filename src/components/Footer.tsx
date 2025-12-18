const Footer = () => {
  return (
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
  );
};

export default Footer;
