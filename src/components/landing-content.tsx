'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Rajesh',
    avatar: 'R',
    title: 'Data Scientist',
    description:
      'Genius has transformed the way I approach data analysis. Its powerful AI algorithms have made complex tasks much simpler.',
  },
  {
    name: 'Aruna',
    avatar: 'A',
    title: 'Machine Learning Engineer',
    description:
      'Genius has become an indispensable tool in my toolkit, expediting my workflow and allowing me to focus more on innovation.',
  },
  {
    name: 'Neha',
    avatar: 'N',
    title: 'Software Developer',
    description:
      'Genius is a remarkable application for developers like me, with accurate code optimization and intelligent suggestions.',
  },
  {
    name: 'Amit',
    avatar: 'A',
    title: 'AI Researcher',
    description:
      'Genius has exceeded my expectations with its robust AI capabilities and user-friendly interface, making it a boon for the AI research community.',
  },
];

export default function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
