import { Plane, Hotel, Utensils, MapPin, CircleAlert, Ticket, Users, Award, Calendar, Clock, Monitor, Wifi, Headphones, Sparkles, Target, Globe, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const handleEnroll = () => {
    // Placeholder for enrollment action
    alert('Спасибо за интерес! Форма записи откроется в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760229803660-fc5d996d9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGpvdXJuZXl8ZW58MXx8fHwxNzY2MTE3NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Travel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/50 via-[#0a0e1a]/70 to-[#0a0e1a]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#14b8a6]" />
            <span className="text-sm text-[#14b8a6]">Набор открыт!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#14b8a6] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
            Английский для путешествий
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#94a3b8] mb-8 max-w-3xl mx-auto">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
          </p>
          
          <p className="text-base sm:text-lg text-[#f1f5f9] mb-12 max-w-3xl mx-auto">
            Этот курс научит вашего ребёнка <span className="text-[#fbbf24]">реальному разговорному английскому</span>, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>
          
          <button
            onClick={handleEnroll}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] rounded-full transition-all duration-300 shadow-lg shadow-[#14b8a6]/20 hover:shadow-[#14b8a6]/40 hover:scale-105"
          >
            <span>Узнать больше</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 inline-block">
              <span className="bg-gradient-to-r from-[#14b8a6] to-[#f97316] bg-clip-text text-transparent">Для кого курс</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-8 rounded-2xl border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#14b8a6]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#14b8a6]">Первая группа</h3>
              <p className="text-xl text-[#f1f5f9]">4–5 класс</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-8 rounded-2xl border border-[#f97316]/20 hover:border-[#f97316]/40 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#f97316]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#f97316]">Вторая группа</h3>
              <p className="text-xl text-[#f1f5f9]">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] via-[#111827] to-[#0a0e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">Программа курса</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Module 1 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#14b8a6]/20 hover:border-[#14b8a6] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6]/20 transition-colors">
                  <Plane className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Аэропорт без стресса</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
                  </p>
                  <p className="text-[#14b8a6] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Уверенность уже в первые часы за границей.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#fbbf24]/20 hover:border-[#fbbf24] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#fbbf24]/20 transition-colors">
                  <Hotel className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">В отеле: заселение и помощь</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
                  </p>
                  <p className="text-[#fbbf24] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Практика вежливых фраз и повседневной лексики.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#f97316]/20 hover:border-[#f97316] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f97316]/20 transition-colors">
                  <Utensils className="w-6 h-6 text-[#f97316]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Кафе и рестораны</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Заказ еды, вопросы про аллергены, счёт и чаевые.
                  </p>
                  <p className="text-[#f97316] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Развитие гастрономического словаря и уверенности в общении.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#14b8a6]/20 hover:border-[#14b8a6] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">На улице: ориентирование и просьбы</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Как спросить дорогу, вызвать такси или найти аптеку.
                  </p>
                  <p className="text-[#14b8a6] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Понимание устной речи и произношения в реальных ситуациях.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#fbbf24]/20 hover:border-[#fbbf24] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#fbbf24]/20 transition-colors">
                  <CircleAlert className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Экстренные случаи</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Потеря вещей, болезнь, помощь полиции — всё это на английском.
                  </p>
                  <p className="text-[#fbbf24] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Важные фразы, которые могут спасти отпуск.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#f97316]/20 hover:border-[#f97316] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f97316]/20 transition-colors">
                  <Ticket className="w-6 h-6 text-[#f97316]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Туризм и развлечения</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Покупка билетов, экскурсии, общение с гидами, музеи и парки.
                  </p>
                  <p className="text-[#f97316] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Погружение в культурный контекст через язык.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#14b8a6]/20 hover:border-[#14b8a6] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#14b8a6]/20 transition-colors">
                  <Globe className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Дружба в путешествиях</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Как познакомиться с другими детьми или подростк��ми за границей.
                  </p>
                  <p className="text-[#14b8a6] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Игровая практика диалогов и неформального общения.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="bg-[#1e293b]/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#fbbf24]/20 hover:border-[#fbbf24] transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#fbbf24]/20 transition-colors">
                  <Award className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Дипломный проект: «Мой идеальный отпуск»</h3>
                  <p className="text-[#94a3b8] text-sm mb-3">
                    Ребёнок планирует воображаемое путешествие и представляет его на английском.
                  </p>
                  <p className="text-[#fbbf24] text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Развитие связной речи и творческого самовыражения.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#14b8a6] to-[#fbbf24] bg-clip-text text-transparent">Почему этот курс особенный?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#14b8a6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#14b8a6]" />
              </div>
              <p className="text-[#f1f5f9]">Акцент на практическую, живую речь, а не на грамматику ради грамматики</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#fbbf24]" />
              </div>
              <p className="text-[#f1f5f9]">Все ситуации — из реальной жизни путешественника</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#f97316]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#f97316]" />
              </div>
              <p className="text-[#f1f5f9]">Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#14b8a6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#14b8a6]" />
              </div>
              <p className="text-[#f1f5f9]">Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] via-[#1e293b]/30 to-[#0a0e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">Что потребуется</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-[#14b8a6]/20">
              <div className="w-14 h-14 bg-[#14b8a6]/10 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-[#14b8a6]" />
              </div>
              <p className="text-[#f1f5f9]">Стационарный компьютер или ноутбук с наушниками и микрофоном</p>
            </div>
            
            <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-[#fbbf24]/20">
              <div className="w-14 h-14 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-7 h-7 text-[#fbbf24]" />
              </div>
              <p className="text-[#f1f5f9]">Стабильный интернет и Zoom</p>
            </div>
            
            <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-[#f97316]/20">
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-[#f97316]" />
              </div>
              <p className="text-[#f1f5f9]">Готовность к активному участию и общению</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div>
              <h2 className="text-3xl sm:text-4xl mb-8">
                <span className="bg-gradient-to-r from-[#14b8a6] to-[#fbbf24] bg-clip-text text-transparent">Расписание</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-6 rounded-2xl border border-[#14b8a6]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#14b8a6]" />
                    <span className="text-[#14b8a6]">Четверг</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-[#fbbf24]" />
                    <span className="text-[#f1f5f9]">15:00 (МСК)</span>
                  </div>
                  <p className="text-[#94a3b8]">Группа 4–5 класс</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-6 rounded-2xl border border-[#f97316]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#f97316]" />
                    <span className="text-[#f97316]">Пятница</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-[#fbbf24]" />
                    <span className="text-[#f1f5f9]">15:30 (МСК)</span>
                  </div>
                  <p className="text-[#94a3b8]">Группа 6–8 класс</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-3xl sm:text-4xl mb-8">
                <span className="bg-gradient-to-r from-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">Стоимость</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#14b8a6]/10 to-[#0d9488]/5 p-8 rounded-2xl border-2 border-[#14b8a6]">
                  <h3 className="text-2xl mb-2 text-[#14b8a6]">Полный курс</h3>
                  <p className="text-[#94a3b8] mb-4">10 уроков</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-[#f1f5f9]">12 000</span>
                    <span className="text-xl text-[#94a3b8]">₽</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#1e293b] to-[#111827] p-8 rounded-2xl border border-[#fbbf24]/30">
                  <h3 className="text-2xl mb-2 text-[#fbbf24]">Абонемент</h3>
                  <p className="text-[#94a3b8] mb-4">За урок</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-[#f1f5f9]">1 300</span>
                    <span className="text-xl text-[#94a3b8]">₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744316661060-762b55678d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbiUyMGhvcml6b258ZW58MXx8fHwxNzY2MTE3NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sunset"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/90 to-[#0a0e1a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#f97316]" />
            <span className="text-sm text-[#f97316]">Места ограничены!</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-[#14b8a6] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Набор открыт!
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#94a3b8] mb-4">
            Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
          </p>
          
          <p className="text-base sm:text-lg text-[#f1f5f9] mb-10">
            Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>
          
          <button
            onClick={handleEnroll}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#14b8a6] via-[#0d9488] to-[#0f766e] hover:from-[#0f766e] hover:via-[#0d9488] hover:to-[#14b8a6] rounded-full transition-all duration-500 shadow-2xl shadow-[#14b8a6]/30 hover:shadow-[#14b8a6]/50 hover:scale-110 transform"
          >
            <span className="text-lg">Записаться на курс</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#94a3b8]">
            © 2025 Английский для путешествий. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
