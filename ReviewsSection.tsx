import { reviews } from '../data/travelData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            💬 Реальные отзывы
          </h2>
          <p className="text-gray-600 text-lg">
            Истории экономии наших путешественников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{review.avatar}</span>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">⭐</span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">📍 {review.destination}</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  Сэкономил {review.savings.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
