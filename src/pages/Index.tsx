import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Icon name="Workflow" className="text-white" size={24} />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SmartFlow
                </span>
                <p className="text-xs text-gray-500">Автоматизация МСБ</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Процесс</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Icon name="Calendar" className="mr-2" size={16} />
              Бесплатная консультация
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                  <Icon name="TrendingUp" className="mr-2" size={16} />
                  Увеличиваем прибыль на 40-60%
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Автоматизируем
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                    ваш бизнес
                  </span>
                  за 14 дней
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Помогаем малому и среднему бизнесу внедрить автоматизацию процессов, 
                  сократить затраты времени на 70% и увеличить прибыль без найма дополнительных сотрудников
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Получить аудит бесплатно
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Посмотреть кейсы
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-500">Автоматизированных компаний</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">14</div>
                  <div className="text-sm text-gray-500">Дней на внедрение</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">70%</div>
                  <div className="text-sm text-gray-500">Экономия времени</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="/img/b2bd760d-737e-499c-8f50-a27a703a1132.jpg" 
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
              Что мы <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">автоматизируем</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Специализируемся на автоматизации ключевых бизнес-процессов для экономии времени и увеличения прибыли
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-blue-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Управление клиентами</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  CRM-системы, автоматические воронки продаж, сегментация клиентов и персонализация коммуникаций
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    +45% конверсии
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-indigo-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Calculator" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Финансовый учет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  Автоматизация бухгалтерии, управленческой отчетности, планирования бюджета и налогового учета
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    -80% времени на отчеты
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-purple-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Package" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Склад и логистика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  Управление запасами, автоматические заказы поставщикам, отслеживание поставок
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    -30% складских затрат
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-green-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="UserCheck" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">HR и кадры</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  Учет рабочего времени, расчет зарплат, система мотивации и KPI сотрудников
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    +25% продуктивности
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-orange-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Megaphone" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Маркетинг и реклама</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  Email-рассылки, социальные сети, аналитика рекламных кампаний, лид-магниты
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    -50% стоимость лида
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 hover:bg-teal-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Аналитика и отчеты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                  Дашборды в реальном времени, KPI мониторинг, прогнозирование и бизнес-аналитика
                </CardDescription>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                    100% прозрачность
                  </Badge>
                </div>
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
              Наши <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">кейсы</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Реальные результаты автоматизации для малого и среднего бизнеса
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/07b4727e-18a4-4e55-8ed3-cfba30330945.jpg" 
                  alt="Автоматизация интернет-магазина" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Интернет-магазин</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Магазин товаров для дома</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Автоматизация от заказа до доставки: интеграция сайта с складом, 
                  автоматические уведомления клиентов, управление поставщиками
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">+60%</div>
                    <div className="text-xs text-gray-600">Продажи</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">-75%</div>
                    <div className="text-xs text-gray-600">Время на заказы</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Читать кейс <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/d92b530c-2382-411d-9499-bf69785f046c.jpg" 
                  alt="Автоматизация производства" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">Производство</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Мебельная фабрика</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Планирование производства, учет материалов, контроль качества, 
                  интеграция с CRM для отслеживания заказов
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">+40%</div>
                    <div className="text-xs text-gray-600">Производительность</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">-35%</div>
                    <div className="text-xs text-gray-600">Брак</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Читать кейс <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/b2bd760d-737e-499c-8f50-a27a703a1132.jpg" 
                  alt="Автоматизация сферы услуг" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-600 text-white">Сфера услуг</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Клининговая компания</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Онлайн-бронирование, маршрутизация сотрудников, контроль качества, 
                  автоматические отчеты и выставление счетов
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-lg font-bold text-teal-600">+80%</div>
                    <div className="text-xs text-gray-600">Заказов</div>
                  </div>
                  <div className="text-center p-3 bg-indigo-50 rounded-lg">
                    <div className="text-lg font-bold text-indigo-600">-60%</div>
                    <div className="text-xs text-gray-600">Время координации</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Читать кейс <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
              <Icon name="FileText" className="mr-2" size={20} />
              Смотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Как мы <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">работаем</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс внедрения автоматизации за 14 дней
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Search" className="text-white" size={32} />
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                1-2 дня
              </div>
              <h3 className="font-bold text-xl mb-3">Аудит процессов</h3>
              <p className="text-gray-600 text-sm">
                Анализируем текущие бизнес-процессы, выявляем узкие места и точки роста
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="PenTool" className="text-white" size={32} />
              </div>
              <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                3-5 дней
              </div>
              <h3 className="font-bold text-xl mb-3">Разработка решения</h3>
              <p className="text-gray-600 text-sm">
                Создаем индивидуальное решение под ваши задачи и бюджет
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Settings" className="text-white" size={32} />
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                7-10 дней
              </div>
              <h3 className="font-bold text-xl mb-3">Внедрение</h3>
              <p className="text-gray-600 text-sm">
                Настраиваем систему, интегрируем с существующими инструментами
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Headphones" className="text-white" size={32} />
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Постоянно
              </div>
              <h3 className="font-bold text-xl mb-3">Поддержка</h3>
              <p className="text-gray-600 text-sm">
                Обучаем команду, сопровождаем и развиваем систему
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Почему выбирают <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">нас</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы специализируемся исключительно на малом и среднем бизнесе, 
                понимаем ваши ограничения по бюджету и времени. 
                Внедряем готовые решения, а не разрабатываем с нуля.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Быстрое внедрение</h4>
                    <p className="text-gray-600 text-sm">Результат уже через 14 дней, а не месяцы разработки</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Доступная цена</h4>
                    <p className="text-gray-600 text-sm">Фиксированная стоимость без скрытых платежей</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Гарантия результата</h4>
                    <p className="text-gray-600 text-sm">Не получили ожидаемый эффект — вернем деньги</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Автоматизированных компаний</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">4,9</div>
                <div className="text-sm text-gray-600">Средняя оценка клиентов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">Рост прибыли в среднем</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Техническая поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Получите <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">бесплатный аудит</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Проанализируем ваши процессы и покажем, как можно увеличить прибыль на 40-60%
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Что входит в бесплатный аудит:</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={24} />
                    <span>Анализ текущих бизнес-процессов</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={24} />
                    <span>Выявление точек роста и экономии</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={24} />
                    <span>Расчет ROI от автоматизации</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={24} />
                    <span>План внедрения с конкретными сроками</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-blue-200">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-blue-200">hello@smartflow.ru</p>
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Input 
                    placeholder="Название компании" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Textarea 
                    placeholder="Опишите ваш бизнес и основные процессы" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-32"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Получить бесплатный аудит
                  </Button>
                  <p className="text-xs text-blue-200 text-center">
                    Обработаем заявку в течение 1 часа в рабочее время
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Icon name="Workflow" className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-xl font-bold">SmartFlow</span>
                  <p className="text-xs text-gray-400">Автоматизация МСБ</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Помогаем малому и среднему бизнесу автоматизировать процессы и увеличивать прибыль
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">CRM автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Учет и склад</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Mail" size={16} />
                  <span>hello@smartflow.ru</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Youtube" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SmartFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}