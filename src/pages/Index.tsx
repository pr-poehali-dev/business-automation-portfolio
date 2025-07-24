import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                AutoBiz
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Консультация
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Автоматизация
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                    бизнеса
                  </span>
                  нового уровня
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Интегрируем CRM-системы, автоматизируем процессы и повышаем эффективность 
                  вашего бизнеса с помощью современных технологий
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать проект
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="/img/ad203fc6-a15b-4db7-b941-3fe7d514822f.jpg" 
                alt="Автоматизация бизнеса" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр решений для автоматизации и интеграции бизнес-процессов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Database" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">CRM Интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Подключение и настройка CRM-систем для управления клиентской базой и автоматизации продаж
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Workflow" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Автоматизация процессов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Создание автоматических рабочих процессов для оптимизации операционной деятельности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Аналитика и отчеты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Настройка системы аналитики для мониторинга KPI и генерации детальных отчетов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Link" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Интеграция систем</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Объединение различных бизнес-приложений и сервисов в единую экосистему
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Shield" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Безопасность данных</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Обеспечение защиты конфиденциальной информации и соответствие стандартам безопасности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Headphones" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Техподдержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Круглосуточная поддержка и сопровождение внедрённых решений автоматизации
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">кейсы</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Успешные проекты автоматизации для различных отраслей бизнеса
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/cd5ddac8-b78a-480e-89d7-3eb5b2bc46ac.jpg" 
                  alt="Команда с CRM" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Интеграция CRM для ретейла</h3>
                <p className="text-gray-600 mb-4">
                  Автоматизация управления клиентами и увеличение продаж на 40%
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">+40% продаж</span>
                  <Button variant="ghost" size="sm">
                    Подробнее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/e93fc38e-406d-4570-9a59-6cbac8d7f129.jpg" 
                  alt="Автоматизация процессов" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Автоматизация логистки</h3>
                <p className="text-gray-600 mb-4">
                  Оптимизация складских операций и сокращение затрат на 35%
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">-35% затрат</span>
                  <Button variant="ghost" size="sm">
                    Подробнее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/ad203fc6-a15b-4db7-b941-3fe7d514822f.jpg" 
                  alt="Цифровая трансформация" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Цифровая трансформация</h3>
                <p className="text-gray-600 mb-4">
                  Полная автоматизация бизнес-процессов производственной компании
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">+60% эффективность</span>
                  <Button variant="ghost" size="sm">
                    Подробнее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold">
                О <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">нас</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы — команда экспертов по автоматизации бизнеса с более чем 10-летним опытом. 
                Специализируемся на интеграции CRM-систем и создании индивидуальных решений 
                для повышения эффективности компаний.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Более 200 успешных проектов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Команда сертифицированных специалистов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Гарантия результата</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Специалистов</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Свяжитесь с <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">нами</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Готовы обсудить автоматизацию вашего бизнеса? Оставьте заявку и получите консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@autobiz.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-300">Москва, ул. Тверская, 15</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Textarea 
                    placeholder="Расскажите о вашем проекте" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="text-blue-400" size={32} />
                <span className="text-2xl font-bold">AutoBiz</span>
              </div>
              <p className="text-gray-400">
                Автоматизация бизнеса нового уровня
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CRM Интеграция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoBiz. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}