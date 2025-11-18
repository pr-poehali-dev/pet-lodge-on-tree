import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Room {
  id: number;
  name: string;
  image: string;
  petType: string;
  description: string;
  features: string[];
  size: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Уютное гнёздышко',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/9d59f595-3603-44ac-811a-7221d4a5f5a6.jpg',
    petType: 'cats',
    description: 'Тёплый домик с круглым окном и мягкими подушками. Идеально для котиков, которые любят наблюдать за птицами.',
    features: ['Круглое панорамное окно', 'Мягкие подушки', 'Когтеточка из натурального дерева', 'Система обогрева'],
    size: '2×2 м'
  },
  {
    id: 2,
    name: 'Многоуровневые апартаменты',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/f2c67dd2-f9ac-4196-bada-92d9ce8b3de2.jpg',
    petType: 'dogs',
    description: 'Просторные номера с несколькими уровнями, соединёнными деревянными мостиками. Подходит для средних и крупных собак.',
    features: ['Несколько уровней', 'Деревянные мостики', 'Фонарики с тёплым светом', 'Обзорная площадка'],
    size: '4×3 м'
  },
  {
    id: 3,
    name: 'Птичья резиденция',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/5b3636e7-d4ef-4187-8233-073a3191532b.jpg',
    petType: 'birds',
    description: 'Миниатюрные домики среди ветвей, украшенные цветами и лианами. Создано специально для попугаев и канареек.',
    features: ['Несколько домиков', 'Живые растения', 'Естественное освещение', 'Защита от ветра'],
    size: '1.5×1.5 м'
  },
  {
    id: 4,
    name: 'Семейный номер',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/9d59f595-3603-44ac-811a-7221d4a5f5a6.jpg',
    petType: 'cats',
    description: 'Большой номер для питомцев, путешествующих семьёй. Уютная атмосфера и много места для игр.',
    features: ['Просторный интерьер', 'Игровая зона', 'Несколько лежанок', 'Кормушки premium'],
    size: '3×3 м'
  },
  {
    id: 5,
    name: 'Королевский люкс',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/f2c67dd2-f9ac-4196-bada-92d9ce8b3de2.jpg',
    petType: 'dogs',
    description: 'Элитный номер с видом на закат. Эксклюзивное обслуживание и максимальный комфорт для вашего питомца.',
    features: ['Панорамный вид', 'VIP обслуживание', 'Массажная лежанка', 'Личный дворецкий'],
    size: '5×4 м'
  },
  {
    id: 6,
    name: 'Компактная студия',
    image: 'https://cdn.poehali.dev/projects/e19d317a-2688-4321-8040-9cf9ceaf4477/files/5b3636e7-d4ef-4187-8233-073a3191532b.jpg',
    petType: 'rodents',
    description: 'Маленький, но очень уютный домик для хомячков, морских свинок и кроликов. Безопасная конструкция.',
    features: ['Компактный размер', 'Многоуровневая система', 'Беговое колесо', 'Свежее сено'],
    size: '1×1 м'
  }
];

const petTypes = [
  { id: 'all', label: 'Все', icon: 'Sparkles' },
  { id: 'cats', label: 'Кошки', icon: 'Cat' },
  { id: 'dogs', label: 'Собаки', icon: 'Dog' },
  { id: 'birds', label: 'Птицы', icon: 'Bird' },
  { id: 'rodents', label: 'Грызуны', icon: 'Squirrel' }
];

const Index = () => {
  const [selectedPetType, setSelectedPetType] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const filteredRooms = selectedPetType === 'all' 
    ? rooms 
    : rooms.filter(room => room.petType === selectedPetType);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjQ1MTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAgNi42My01LjM3IDEyLTEyIDEycy0xMi01LjM3LTEyLTEyIDUuMzctMTIgMTItMTIgMTIgNS4zNyAxMiAxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Icon name="TreePine" size={64} className="text-primary animate-float" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Древесная гостиница
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уютные домики на дереве для ваших любимых питомцев. Природная атмосфера, экологичные материалы и забота о каждом госте.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in">
            {petTypes.map((type) => (
              <Badge
                key={type.id}
                variant={selectedPetType === type.id ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-3 text-base transition-all hover:scale-105"
                onClick={() => setSelectedPetType(type.id)}
              >
                <Icon name={type.icon} size={20} className="mr-2" />
                {type.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <Card
              key={room.id}
              className="overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {room.size}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {room.description}
                </p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">Подробнее</span>
                  <Icon name="ChevronRight" size={16} className="ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRoom && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedRoom.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="flex gap-2">
                  <Badge className="bg-accent text-accent-foreground">
                    <Icon name="Maximize2" size={14} className="mr-1" />
                    {selectedRoom.size}
                  </Badge>
                  <Badge variant="outline">
                    <Icon name="Sparkles" size={14} className="mr-1" />
                    Premium
                  </Badge>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {selectedRoom.description}
                </p>
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Star" size={20} className="mr-2 text-accent" />
                    Особенности номера
                  </h4>
                  <ul className="space-y-3">
                    {selectedRoom.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={20} className="mr-3 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
